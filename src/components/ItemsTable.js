import axios from "axios"; // Keep if you still use it for remove, otherwise can remove
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import WantToEdit from "./WantToEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase-config.js";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore"; // Import getDoc

function ItemsTable() {
  const [data, setData] = useState([]);
  const [showWantToEdit, setShowWantEdit] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [editID, setEditID] = useState(""); // This will hold the Firebase document ID
  const menuItemsCollectionRef = collection(db, "craftyKoKoItemsTable");

  useEffect(() => {
    getData();
  }, []);

  const extractItemData = (docSnapshot) => {
    const fields = docSnapshot._document.data.value.mapValue.fields;

    return {
      id: docSnapshot.id,
      offer: parseInt(fields.offer.integerValue) || fields.offer.doubleValue,
      name: fields.name.stringValue,
      price: fields.price.integerValue || fields.price.doubleValue,
      originalPrice:
        fields.originalPrice?.integerValue ||
        fields.originalPrice?.doubleValue ||
        null, // Ensure originalPrice is handled
      category: fields.category.stringValue,
      daysToDeliver:
        parseInt(fields.daysToDeliver.integerValue) ||
        fields.daysToDeliver.doubleValue,
      quantity:
        parseInt(fields.quantity.integerValue) || fields.quantity.doubleValue,
      isVeg: parseInt(fields.isVeg.integerValue) === 1,
      subCategory: fields.subCategory.stringValue,
      rating: parseInt(fields.rating.integerValue) || fields.rating.doubleValue,
      image: fields.image.stringValue,
      description: fields.description.stringValue,
      isAvailable: parseInt(fields.isAvailable.integerValue) === 1,
    };
  };

  const getData = async () => {
    try {
      const fetchData = await getDocs(menuItemsCollectionRef);
      const transformedData = fetchData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //Firestore setup
      const transformedDataRefined = fetchData.docs.map((docSnapshot) => {
        const data = docSnapshot.data();
        return {
          id: docSnapshot.id,
          offer:
            typeof data.offer === "string"
              ? parseInt(data.offer, 10)
              : data.offer,
          name: data.name,
          price:
            typeof data.price === "string"
              ? parseFloat(data.price)
              : data.price,
          originalPrice:
            typeof data.originalPrice === "string"
              ? parseFloat(data.originalPrice)
              : data.originalPrice,
          category: data.category,
          daysToDeliver:
            typeof data.daysToDeliver === "string"
              ? parseInt(data.daysToDeliver, 10)
              : data.daysToDeliver,
          quantity:
            typeof data.quantity === "string"
              ? parseInt(data.quantity, 10)
              : data.quantity,
          isVeg: typeof data.isVeg === "number" ? data.isVeg === 1 : data.isVeg, // Assuming boolean or 1/0
          subCategory: data.subCategory,
          rating:
            typeof data.rating === "string"
              ? parseFloat(data.rating)
              : data.rating,
          image: data.image,
          description: data.description,
          isAvailable:
            typeof data.isAvailable === "number"
              ? data.isAvailable === 1
              : data.isAvailable,
        };
      });
      setData(transformedDataRefined);
    } catch (error) {
      //console.error("Error fetching data:", error);
      toast.error("Failed to load items.");
    }
  };

  const handleEdit = async (id) => {
    //console.log("Editing item with ID:", id);
    setEditID(id);

    try {
      const docRef = doc(db, "craftyKoKoItemsTable", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const itemData = docSnap.data();
        setEditingItem({
          id: docSnap.id,
          name: itemData.name || "",
          description: itemData.description || "",
          price: parseFloat(itemData.price) || 0,
          originalPrice: parseFloat(itemData.originalPrice) || null,
          quantity: parseFloat(itemData.quantity) || 0,
          isVeg:
            typeof itemData.isVeg === "number"
              ? itemData.isVeg
              : itemData.isVeg === 1,
          isAvailable:
            typeof itemData.isAvailable === "number"
              ? itemData.isAvailable
              : itemData.isAvailable === 1,
          category: itemData.category || "",
          subCategory: itemData.subCategory || "",
          offer: parseFloat(itemData.offer, 10) || 0,
          daysToDeliver: parseFloat(itemData.daysToDeliver, 10) || 0,
          rating: parseFloat(itemData.rating) || 0,
          image: itemData.image || "",
        });
        setShowWantEdit(true);
      } else {
        console.error("No such document!");
        toast.error("Item not found.");
      }
    } catch (err) {
      console.error("Error fetching item for edit:", err);
      toast.error("Failed to fetch item details for editing.");
    }
  };

  const saveChanges = async (updatedData) => {
    const updateToastId = toast.info("Updating item...", {
      autoClose: false,
      closeButton: false,
    });

    setTimeout(async () => {
      try {
        const itemDocRef = doc(db, "craftyKoKoItemsTable", editID);
        const dataToUpdate = {
          ...updatedData,
          isVeg: updatedData.isVeg ? 1 : 0,
          isAvailable: updatedData.isAvailable ? 1 : 0,
          price: parseFloat(updatedData.price) || 0,
          originalPrice: updatedData.originalPrice
            ? parseFloat(updatedData.originalPrice)
            : null,
          offer: parseInt(updatedData.offer, 10) || 0,
          daysToDeliver: parseInt(updatedData.daysToDeliver, 10) || 0,
          rating: parseFloat(updatedData.rating) || 0,
          quantity: parseInt(updatedData.quantity, 10) || 0,
        };

        // Remove the `id` field from dataToUpdate as it's part of the doc reference, not the document itself
        delete dataToUpdate.id;

        await updateDoc(itemDocRef, dataToUpdate); //update

        toast.update(updateToastId, {
          render: "Item updated successfully!",
          type: "success",
          autoClose: 3000,
          closeButton: true,
          isLoading: false,
        });

        setShowWantEdit(false);
        getData(); //refresh table data
      } catch (error) {
        console.error("Error updating document:", error);
        toast.update(updateToastId, {
          render: "Failed to update item!",
          type: "error",
          autoClose: 5000,
          closeButton: true,
          isLoading: false,
        });
      }
    }, 3000);
  };

  const handleRemove = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?") === true) {
      // Use strict equality
      try {
        const itemDoc = doc(db, "craftyKoKoItemsTable", id);
        await deleteDoc(itemDoc);
        // await axios.delete(`https://localhost:7051/api/MenuItem/${id}`);
        toast.success("Item removed successfully!");
        getData(); // Refresh the table data
      } catch (err) {
        console.error("Error removing item:", err);
        toast.error("Failed to remove item.");
      }
    }
  };

  return (
    <div className="mt-24 min-h-screen relative overflow-x-auto shadow-md sm:rounded-lg">
      <ToastContainer className="mt-20" />
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-black uppercase bg-gray-50 border border-b-2">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, index) => (
              <tr
                key={d.id || index} // Use d.id for key, fallback to index
                className="bg-white border-b shadow-sm border-gray-200 hover:bg-slate-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {d.name}
                </th>
                <td className="px-6 py-3">
                  ₹ {parseFloat(d.price).toFixed(2)}
                </td>
                <td className="flex items-center px-6 py-4 justify-between">
                  <button
                    className="font-medium p-1 text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleEdit(d.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="font-medium p-1 text-red-600 dark:text-red-500 hover:underline ms-3"
                    onClick={() => handleRemove(d.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">
                <Shimmer />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showWantToEdit && (
        <WantToEdit
          showPopup={showWantToEdit}
          closePopup={() => setShowWantEdit(false)}
          initialData={editingItem} // Pass the data of the item to be edited
          saveChanges={saveChanges} // Pass the new saveChanges function
        />
      )}
    </div>
  );
}

export default ItemsTable;
