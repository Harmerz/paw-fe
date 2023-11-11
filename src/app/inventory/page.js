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
    { id: 3, name: 'Product 1', description: 'Description 1', type: 'Type 1', qty: 10, unit: 'kg', price: '$10.00' },
    { id: 4, name: 'Product 2', description: 'Description 2', type: 'Type 2', qty: 20, unit: 'pcs', price: '$15.00' },
    { id: 5, name: 'Product 1', description: 'Description 1', type: 'Type 1', qty: 10, unit: 'kg', price: '$10.00' },
    { id: 6, name: 'Product 2', description: 'Description 2', type: 'Type 2', qty: 20, unit: 'pcs', price: '$15.00' },
    { id: 7, name: 'Product 1', description: 'Description 1', type: 'Type 1', qty: 10, unit: 'kg', price: '$10.00' },
    { id: 8, name: 'Product 2', description: 'Description 2', type: 'Type 2', qty: 20, unit: 'pcs', price: '$15.00' },
    { id: 9, name: 'Product 1', description: 'Description 1', type: 'Type 1', qty: 10, unit: 'kg', price: '$10.00' },
    { id: 10, name: 'Product 2', description: 'Description 2', type: 'Type 2', qty: 20, unit: 'pcs', price: '$15.00' },
  ];

  return (
    <div className="bg-white bg-contain">
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="ml-auto mb-12">
            <button className="bg-ijo1 text-white px-4 py-2 rounded cursor-pointer font-poppins text-base sm:text-lg lg:text-xl">+Add Inventory</button>
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
                className="bg-gray-200 p-2 rounded-full mx-2 cursor-pointer font-bold font-poppins text-base transition-colors duration-300 text-black border border-black hover:text-white hover:bg-orange-tumbas hover:border-white"
              >
                {category}
              </div>
            ))}
          </div>
          <table className="table mt-5 text-left w-full mx-2">
              <thead>
                <tr className="bg-ijo4 font-poppins text-ijo1">
                  <th className="py-2 pl-3">id</th>
                  <th className="py-2 pl-3">Name</th>
                  <th className="py-2 pl-3">Description</th>
                  <th className="py-2 pl-3">Type</th>
                  <th className="py-2 pl-3">Qty</th>
                  <th className="py-2 pl-3">Unit</th>
                  <th className="py-2 pl-3">Price</th>
                  <th className="py-2 pl-3 text-ijo4">Edit</th>
                  <th className="py-2 pl-3 text-ijo4">Delete</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((data) => (
                  <tr key={data.id} className="text-black font-bold">
                    <td className="py-4 pl-3">{data.id}</td>
                    <td className="py-2 pl-3">{data.name}</td>
                    <td className="py-2 pl-3">{data.description}</td>
                    <td className="py-2 pl-3">{data.type}</td>
                    <td className="py-2 pl-3">{data.qty}</td>
                    <td className="py-2 pl-3">{data.unit}</td>
                    <td className="py-2 pl-3">{data.price}</td>
                    <td className="py-2 pl-3">
                      <button className="bg-ijo3 text-white px-4 py-2 rounded cursor-pointer">Edit</button>
                    </td>
                    <td className="py-2 pl-3">
                      <button className="bg-merah-tumbas text-white px-4 py-2 rounded cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>

      <div className="flex">
        <div className="flex-none w-1/6 bg-white"></div>
  
        <div className="flex-grow w-2/3 bg-white">
          <div className="text-black font-bold text-3xl pt-8 pb-6">
            Update Inventory
          </div>

          <div className="text-black font-bold pb-2">
            Name
          </div>
          <div className="pb-4">
          <input
              type="text"
              className="bg-gray-200 p-2 rounded-md w-full"
              placeholder="Search..."
            />
          </div>

          <div className="text-black font-bold pb-2">
            Description
          </div>
          <div className="pb-4">
          <input
              type="text"
              className="bg-gray-200 p-2 pb-28 rounded-md w-full"
              placeholder="Search..."
            />
          </div>
          
          <div className="text-black font-bold pb-2">
            Quantity
          </div>
          <div className="pb-4">
            <input
              type="text"
              className="bg-gray-200 p-2 rounded-md w-32"
              placeholder="Search..."
            />
          </div>

          <div className="text-black font-bold pb-2">
            Type
          </div>
          <div className="pb-4">
          <input
              type="text"
              className="bg-gray-200 p-2 rounded-md w-full"
              placeholder="Search..."
            />
          </div>

          <div className="text-black font-bold pb-2">
            Price
          </div>
          <div className="pb-12">
          <input
              type="text"
              className="bg-gray-200 p-2 rounded-md w-full"
              placeholder="Search..."
            />
          </div>

        </div>
        
        <div className="relative flex-none w-1/6 white">
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-ijo3 text-white px-4 py-2 rounded cursor-pointer font-bold">Save</button>
        </div>


      </div>

    </div>

    
  );
}
