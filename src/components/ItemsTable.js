import axios from "axios";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import WantToEdit from "./WantToEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function itemsTable() {
  const [data, setData] = useState([]);
  const [showWantToEdit, setShowWantEdit] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [editID, setEditID] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get("https://localhost:7051/api/MenuItem").then((result) => {
      setData(result.data);
    });
  };

  const handleEdit = async (id) => {
    await axios
      .get(`https://localhost:7051/api/MenuItem/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setEditID(res.data?.id);
          // Set the item to a separate state for editing
          setEditingItem({
            id: res.data?.id, // Use correct casing
            name: res?.data?.name, // Ensure matching keys
            description: res?.data?.description,
            price: parseFloat(res.data.price), // Convert to number
            quantity: parseFloat(res.data.quantity),
            isVeg: res.data.isVeg, // Use directly as received
            isAvailable: res.data.isAvailable,
            category: res.data.category,
            subCategory: res.data.subCategory,
            offer: parseInt(res.data.offer, 10),
            daysToDeliver: parseInt(res.data.daysToDeliver, 10),
            rating: parseFloat(res.data.rating),
            image: res.data.image || "",
          });
          setShowWantEdit(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching item:", err);
        toast.error("Failed to fetch item details.");
      });
  };

  const handleRemove = async (id) => {
    if (window.confirm("Are you sure want to delete this item") == true) {
      await axios
        .delete(`https://localhost:7051/api/MenuItem/${id}`)
        .then((res) => {
          if (res.status == 200) {
            toast.success("Item Got removed");
            getData();
          }
        })
        .catch((err) => {
          toast.error("Item not removed !!");
        });
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
            {/* <th scope="col" className="px-6 py-3">
              Qunatity
            </th>
            <th scope="col" className="px-6 py-3">
              Is Vegeterian?
            </th>
            <th scope="col" className="px-6 py-3">
              Is Available?
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Sub-Category
            </th>
            <th scope="col" className="px-6 py-3">
              Offer
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th> */}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, index) => (
              <tr
                key={`${d.ID}_${index}` || index}
                className="bg-white border-b shadow-sm border-gray-200 hover:bg-slate-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {d.name}
                </th>
                <td className="px-6 py-3">{d.price} INR</td>
                {/* <td className="px-6 py-3">{d.quantity} pcs</td>
                <td className="px-6 py-3">{d.isVeg == 1 ? "Yes" : "No"}</td>
                <td className="px-6 py-3">
                  {d.isAvailable == 1 ? "Yes" : "No"}
                </td>
                <td className="px-6 py-3">{d.category}</td>
                <td className="px-6 py-3">{d.subCategory}</td>
                <td className="px-6 py-3">{d.offer}% off</td>
                <td className="px-6 py-3">{d.rating}</td> */}
                <td className="flex items-center px-6 py-4 justify-between">
                  <button
                    className="font-medium p-1 text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleEdit(d.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="font-medium p-1 text-red-600 dark:text-red-500 hover:underline ms-3"
                    id={d.ID}
                    onClick={() => handleRemove(d.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Shimmer />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <WantToEdit
        showPopup={showWantToEdit}
        closePopup={() => setShowWantEdit(false)}
        initialData={editingItem}
        editID={editID}
        saveChanges={(updatedData) => {
          setShowWantEdit(false);
        }}
      />
    </div>
  );
}

export default itemsTable;
