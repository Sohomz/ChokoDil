import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateItem() {
  const [formData, setFormData] = useState({
    namee: "",
    description: "",
    price: "",
    quantity: "",
    isVeg: false,
    category: "",
    subCategory: "",
    offer: 0,
    daysToDeliver: "",
    available: false,
    rating: 0,
    image: "",
  });

  const generateId = (category, subCategory) => {
    // Get current date and time
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based, pad with 0
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds())
      .padStart(3, "0")
      .slice(0, 2); // Limit to first 2 digits

    // Generate ID
    const id = `${category.charAt(0)}${subCategory.substring(
      0,
      2
    )}${year}${month}${day}${hours}${minutes}${milliseconds}`;
    return id;
  };

  const clearData = () => {
    setFormData({
      namee: "",
      description: "",
      price: "",
      quantity: "",
      isVeg: false,
      category: "",
      subCategory: "",
      offer: 0,
      daysToDeliver: "",
      available: false,
      rating: 0,
      image: "",
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://localhost:7051/api/MenuItem";

    const passingData = {
      id: generateId(formData.category, formData.subCategory), // Correct field name
      name: formData.namee, // 'name' matches the API spec
      description: formData.description,
      price: parseFloat(formData.price), // 'price' as a number
      quantity: parseFloat(formData.quantity), // 'quantity' as a number
      isVeg: formData.isVeg ? 1 : 0, // Boolean converted to integer (0 or 1)
      isAvailable: formData.available ? 1 : 0, // Boolean converted to integer (0 or 1)
      category: formData.category, //string
      subCategory: formData.subCategory, //string
      offer: parseInt(formData.offer, 10), // 'offer' as an integer
      daysToDeliver: parseInt(formData.daysToDeliver, 10), // 'daysToDeliver' as an integer
      rating: parseFloat(formData.rating), // 'rating' as a number
      image: formData.image, // string
    };

    console.log("Passing Data:", passingData);

    try {
      const response = await axios.post(url, passingData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Item added to the list");

      clearData();
    } catch (error) {
      toast.error("Failed to add the item.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-20 bg-gradient-to-r from-pink-400 via-purple-400 to-white">
      <ToastContainer className="mt-20" />
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-lg font-bold mb-6 text-center text-purple-600">
          Create Item
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Description */}
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="namee"
                value={formData.namee}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                required
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
                value={formData.price}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Quantity:</label>
              <input
                type="number"
                min={0}
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                required
              />
            </div>
          </div>

          {/* Veg/Non-Veg and Available */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isVeg"
                checked={formData.isVeg}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm font-medium">Vegeterian</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
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
                value={formData.category}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                required
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
            <div>
              <label className="block text-sm font-medium">Sub-Category:</label>
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

          {/* Offer and Days to Deliver */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Offer:</label>
              <input
                type="number"
                name="offer"
                min={0}
                max={100}
                value={formData.offer}
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
                value={formData.daysToDeliver}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
                required
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium">Rating (1-5):</label>
            <div className="flex items-center">
              <input
                type="range"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rating: parseFloat(e.target.value),
                  })
                }
                className="w-full cursor-pointer appearance-none h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"
              />
              <span className="ml-2 text-sm font-bold text-purple-600">
                {formData.rating}
              </span>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium">Image URL:</label>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300 w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateItem;
