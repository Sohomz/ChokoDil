import React, { useState } from "react";

function CreateItem() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    isVeg: false,
    category: "",
    subCategory: "",
    offer: "",
    daysToDeliver: "",
    available: false,
    rating: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-white">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-24 mb-10 max-w-md">
        <h1 className="text-lg font-bold mb-4 text-center text-purple-600">
          Create Item
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description:
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price:</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Quantity (per piece):
            </label>
            <input
              type="number"
              name="quantity"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Veg/Non-Veg */}
          <div>
            <label className="block text-sm font-medium mb-1">
              <input
                type="checkbox"
                name="isVeg"
                onChange={handleChange}
                className="mr-2"
              />
              Veg/Non-Veg
            </label>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="chocolate">Chocolate</option>
              <option value="cakes">Cakes</option>
              <option value="brownie">Brownie</option>
              <option value="mousse">Mousse</option>
            </select>
          </div>

          {/* Subcategory Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Sub Category:
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            >
              <option value="" disabled>
                Select Sub-Category
              </option>
              <option value="chocolate">small Chocolate</option>
              <option value="cakes">Cakes</option>
              <option value="brownie">Brownie</option>
              <option value="mousse">Mousse</option>
            </select>
          </div>

          {/* Offer */}
          <div>
            <label className="block text-sm font-medium mb-1">Offer:</label>
            <input
              type="text"
              name="offer"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            />
          </div>

          {/* Days to Deliver */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Days to Deliver:
            </label>
            <input
              type="number"
              name="daysToDeliver"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Available */}
          <div>
            <label className="block text-sm font-medium mb-1">
              <input
                type="checkbox"
                name="available"
                onChange={handleChange}
                className="mr-2"
              />
              Available
            </label>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Rating (1-5):
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                name="rating"
                min="1"
                max="5"
                step="0.1" // Allows decimal precision
                value={formData.rating || 1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rating: parseFloat(e.target.value),
                  })
                }
                className="w-full cursor-pointer appearance-none h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"
              />
              <span className="text-purple-600 font-bold">
                {formData.rating || "1.0"}
              </span>
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateItem;
