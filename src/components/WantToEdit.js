import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function WantToEdit({
  showPopup,
  closePopup,
  initialData,
  saveChanges,
  editID,
}) {
  const [formData, setFormData] = useState({});

  // Sync formData with initialData whenever initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id, // Use correct casing
        name: initialData.name, // Ensure matching keys
        description: initialData.description,
        price: parseFloat(initialData.price), // Convert to number
        quantity: parseFloat(initialData.quantity),
        isVeg: initialData.isVeg, // Use directly as received
        isAvailable: initialData.isAvailable,
        category: initialData.category,
        subCategory: initialData.subCategory,
        offer: parseInt(initialData.offer, 10),
        daysToDeliver: parseInt(initialData.daysToDeliver, 10),
        rating: parseFloat(initialData.rating),
        image: initialData.image || "",
      });
    }
  }, [initialData]); // Trigger useEffect whenever initialData changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked ? 1 : 0 }); // Convert checkbox to integer (0/1)
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://localhost:7051/api/MenuItem/${editID}`, formData, {
        //pass the updated formData onChange
        headers: {
          "Content-Type": "application/json", // Ensure JSON data format
        },
      })
      .then((result) => {
        if (result.status === 200) {
          toast.success("Item updated successfully");
        }
      })
      .catch((err) => {
        toast.error(
          `Error: ${err.response?.data || "Failed to update the data"}`
        );
      });

    saveChanges(formData); // Call the save function with updated data
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200 ${
        showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white text-black p-6 rounded shadow-lg w-full max-w-2xl">
        <h1 className="text-lg font-bold mb-6 text-center text-purple-600">
          Edit Item
        </h1>
        <form onSubmit={handleSave} className="space-y-4">
          {/* Name and Description */}
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description:</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Price:</label>
              <input
                type="number"
                name="price"
                min={0}
                value={formData.price || 0}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Quantity:</label>
              <input
                type="number"
                name="quantity"
                min={0}
                value={formData.quantity || 0}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
          </div>

          {/* Veg/Non-Veg and Available */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isVeg"
                checked={formData.isVeg === 1}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm font-medium">Veg/Non-Veg</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isAvailable"
                checked={formData.isAvailable === 1}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm font-medium">Available</label>
            </div>
          </div>

          {/* Category and Subcategory */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Category:</label>
              <select
                name="category"
                value={formData.category || ""}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="chocolate">Chocolate</option>
                <option value="cakes">Cakes</option>
                <option value="brownie">Brownie</option>
                <option value="mousse">Mousse</option>
                <option value="small chocolate">Small chocolate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Sub-Category:</label>
              <div>
                <label className="block text-sm font-medium">
                  Sub-Category:
                </label>
                <input
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>

          {/* Offer and Days to Deliver */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Offer %:</label>
              <input
                type="number"
                name="offer"
                min={0}
                max={100}
                value={formData.offer || 0}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Days to Deliver:
              </label>
              <input
                type="number"
                name="daysToDeliver"
                min={0}
                value={formData.daysToDeliver || ""}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Rating</label>
              <input
                type="range"
                name="rating"
                min={0}
                max={5}
                step={0.1}
                value={formData.rating || 0}
                onChange={handleChange}
                className="w-full cursor-pointer appearance-none h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"
                e="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
              <span className="ml-2 text-sm font-bold text-purple-600">
                {formData.rating}
              </span>
            </div>
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium">Image URL:</label>
              <input
                type="text"
                name="image"
                value={formData.image || ""}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WantToEdit;
