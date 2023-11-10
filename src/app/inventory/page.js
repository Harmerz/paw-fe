import React from 'react';

export default function Inventory() {
  const categories = [
    'Meat & Egg',
    'Fruits',
    'Vegetables',
    'Sauce',
    'Grain',
    'Spices',
    'Dairy',
    'Herbs',
    'Bakery',
    'Snack',
  ];

  //example
  const tableData = [
    { id: 1, name: 'Product 1', description: 'Description 1', type: 'Type 1', qty: 10, unit: 'kg', price: '$10.00' },
    { id: 2, name: 'Product 2', description: 'Description 2', type: 'Type 2', qty: 20, unit: 'pcs', price: '$15.00' },
  
  ];

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-start">
        <div className="ml-auto mb-12">
          <button className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer font-poppins text-base sm:text-lg lg:text-xl">+Add Inventory</button>
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-200 p-2 mx-2 rounded-md w-96"
            placeholder="Search..."
          />
        </div>
        <div className="flex mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-200 p-2 rounded-full mx-2 cursor-pointer font-bold font-poppins text-base transition-colors duration-300 text-black border border-black hover:text-white hover:bg-orange-400 hover:border-white"
            >
              {category}
            </div>
          ))}
        </div>
        <table className="table mt-5 text-left w-full">
            <thead>
              <tr className="bg-green-100 font-poppins text-green-700">
                <th className="py-2">id</th>
                <th className="py-2">Name</th>
                <th className="py-2">Description</th>
                <th className="py-2">Type</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Unit</th>
                <th className="py-2">Price</th>
                <th className="py-2 text-green-100">Edit</th>
                <th className="py-2 text-green-100">Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id} className="text-black font-bold">
                  <td className="py-2">{data.id}</td>
                  <td className="py-2">{data.name}</td>
                  <td className="py-2">{data.description}</td>
                  <td className="py-2">{data.type}</td>
                  <td className="py-2">{data.qty}</td>
                  <td className="py-2">{data.unit}</td>
                  <td className="py-2">{data.price}</td>
                </tr>
              ))}
            </tbody>

        </table>
      </div>
    </div>
  );
}
