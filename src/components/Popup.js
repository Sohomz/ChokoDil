import React from "react";

const Popup = ({ message, showPopup }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-100 ${
        showPopup ? "opacity-100" : "opacity-0"
      } ${showPopup ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="bg-white p-4 rounded shadow-lg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
