import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon."); // Simple alert for demo

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We'd love to hear from you! Please fill out the form below or use
            our direct contact info.
          </p>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Subject (Optional)"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Direct Contact Info */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>You can also reach us directly:</p>
          <p className="mt-2">
            Email:{" "}
            <Link to="#" className="text-indigo-600 hover:underline">
              info@yourcompany.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link to="#" className="text-indigo-600 hover:underline">
              +1 (234) 567-890
            </Link>
          </p>
          <p>Address: 123 Cocoa Lane, ChokoDil City, State, ZIP</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
