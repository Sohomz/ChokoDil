import axios from "axios";
import React, { useState, useEffect } from "react";

function itemsTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("https://localhost:7051/api/MenuItem").then((result) => {
      setData(result.data);
    });
  };
  console.log(data);
  return (
    <div className="mt-24 min-h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
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
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {d.name}
                  </th>
                  <td className="px-6 py-3">{d.price}</td>
                  <td className="px-6 py-3">{d.quantity}</td>
                  <td className="px-6 py-3">{d.isVeg}</td>
                  <td className="px-6 py-3">{d.isAvailable}</td>
                  <td className="px-6 py-3">{d.category}</td>
                  <td className="px-6 py-3">{d.subCategory}</td>
                  <td className="px-6 py-3">{d.offer}</td>
                  <td className="px-6 py-3">{d.rating}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default itemsTable;
