'use client'

import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

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
  ]

  // example
  const tableData = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: '$10.00',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: '$15.00',
    },
    {
      id: 3,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: '$10.00',
    },
    {
      id: 4,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: '$15.00',
    },
    {
      id: 5,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: '$10.00',
    },
    {
      id: 6,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: '$15.00',
    },
    {
      id: 7,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: '$10.00',
    },
    {
      id: 8,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: '$15.00',
    },
    {
      id: 9,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: '$10.00',
    },
    {
      id: 10,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: '$15.00',
    },
  ]

  return (
    <div className="min-h-screen bg-white bg-contain">
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 ml-auto">
            <button
              type="button"
              className="font-poppins cursor-pointer rounded bg-ijo1 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
            >
              +Add Inventory
            </button>
          </div>
          <div>
            <input
              type="text"
              className="mx-2 w-96 rounded-md bg-gray-200 p-2"
              placeholder="Search..."
            />
          </div>
          <div className="mt-4 flex">
            {categories.map((category) => (
              <div
                key={category}
                className="font-poppins mx-2 cursor-pointer rounded-full border border-black bg-gray-200 p-2 text-base font-bold text-black transition-colors duration-300 hover:border-white hover:bg-orange-tumbas hover:text-white"
              >
                {category}
              </div>
            ))}
          </div>
          <table className="mx-2 mt-5 table w-full text-left">
            <thead>
              <tr className="font-poppins bg-ijo4 text-ijo1">
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
                <tr key={data.id} className="font-bold text-black">
                  <td className="py-4 pl-3">{data.id}</td>
                  <td className="py-2 pl-3">{data.name}</td>
                  <td className="py-2 pl-3">{data.description}</td>
                  <td className="py-2 pl-3">{data.type}</td>
                  <td className="py-2 pl-3">{data.qty}</td>
                  <td className="py-2 pl-3">{data.unit}</td>
                  <td className="py-2 pl-3">{data.price}</td>
                  <td className="py-2 pl-3">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center rounded bg-ijo3 px-4 py-2 text-white"
                    >
                      <IoColorWandSharp className="mr-2" /> Edit
                    </button>
                  </td>
                  <td className="py-2 pl-3">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center rounded bg-merah-tumbas px-4 py-2 text-white"
                    >
                      <IoTrashBinSharp className="mr-2" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
