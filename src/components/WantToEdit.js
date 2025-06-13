//
import React, { useState, useEffect } from "react";
// No need for axios here if you're handling the update in the parent via Firebase
// No need for toast here as well, as the parent will manage it.

function WantToEdit({ showPopup, closePopup, initialData, saveChanges }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    isVeg: 0,
    isAvailable: 0,
    category: "",
    subCategory: "",
    offer: 0,
    daysToDeliver: 0,
    rating: 0,
    image: "",
  });

  //sync formData with initialData whenever initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id || "",
        name: initialData.name || "",
        description: initialData.description || "",
        price: isNaN(initialData.price) ? 0 : parseFloat(initialData.price),
        quantity: isNaN(initialData.quantity)
          ? 0
          : parseFloat(initialData.quantity),
        isVeg: initialData.isVeg,
        isAvailable: initialData.isAvailable,
        category: initialData.category || "",
        subCategory: initialData.subCategory || "",
        offer: isNaN(initialData.offer) ? 0 : parseInt(initialData.offer, 10),
        daysToDeliver: isNaN(initialData.daysToDeliver)
          ? 0
          : parseInt(initialData.daysToDeliver, 10),
        rating: isNaN(initialData.rating) ? 0 : parseFloat(initialData.rating),
        image: initialData.image || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveChanges(formData);
    closePopup();
  };

  if (!showPopup) return null;

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

          {/* Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Current Price:
              </label>
              <input
                type="number"
                name="price"
                min={0}
                value={formData.price || 0}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
              />
            </div>
          </div>

          {/* Quantity and Veg/Non-Veg */}
          <div className="grid grid-cols-2 gap-4">
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
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                name="isVeg"
                checked={!!formData.isVeg} // Cast to boolean for checked prop
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label className="text-sm font-medium">Is Vegetarian?</label>
            </div>
          </div>

          {/* Available and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isAvailable"
                checked={!!formData.isAvailable} // Cast to boolean for checked prop
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label className="text-sm font-medium">Is Available?</label>
            </div>
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
                <option value="cake">Cake</option>
                <option value="brownie">Brownie</option>
                <option value="mousse">Mousse</option>
                <option value="small chocolate">Small chocolate</option>
              </select>
            </div>
          </div>

          {/* Subcategory and Offer */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Sub-Category:</label>
              <input
                name="subCategory"
                value={formData.subCategory || ""}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                type="text"
                required
              />
            </div>
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
          </div>

          {/* Days to Deliver and Rating */}
          <div className="grid grid-cols-2 gap-4">
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
              <label className="block text-sm font-medium">
                Rating:{" "}
                <span className="ml-2 text-sm font-bold text-purple-600">
                  {formData.rating}
                </span>
              </label>
              <input
                type="range"
                name="rating"
                min={0}
                max={5}
                step={0.1}
                value={formData.rating || 0}
                onChange={handleChange}
                className="w-full cursor-pointer appearance-none h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"
              />
            </div>
          </div>

          {/* Image URL */}
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
