import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-gray-100 rounded-lg">
      <div className="md:w-1/2">
        <img
          src="path-to-your-cookie-image.jpg"
          alt="Cookies"
          className="rounded-lg w-full"
        />
      </div>
      <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl font-bold">Bulk Ordering</h2>
        <p className="mt-4 text-lg text-gray-700">
          What do cookies and friends have in common? You can never have too
          many. When ordering in bulk, we recommend ordering more than enough.
        </p>
        <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
          Bulk Options
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
