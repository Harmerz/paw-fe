'use client'

import { useState } from 'react'

import { NavBar } from '@/components/elements/navbar'

export default function Order() {
  const [quantity, setQuantity] = useState(false)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
  }

  function formatCurrency(amount) {
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount)
    return formattedAmount
  }

  const tableData = [
    {
      id: 1,
      date: Date.now(),
      totalPrice: 15000,
      items: [
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
      ],
    },
    {
      id: 1,
      date: Date.now(),
      totalPrice: 15000,
      items: [
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
      ],
    },
    {
      id: 1,
      date: Date.now(),
      totalPrice: 15000,
      items: [
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
      ],
    },
  ]

  return (
    <div style={{ backgroundColor: '#FCFFFA' }} className="bg-white bg-contain">
      <NavBar />
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 ml-auto">
            <button
              type="button"
              className="font-poppins cursor-pointer rounded bg-ijo1 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
            >
              +Add Order
            </button>
          </div>
          <div>
            <input
              type="text"
              className="mx-2 w-96 rounded-md bg-gray-200 p-2"
              placeholder="Search..."
            />
          </div>
        </div>
        <table className="mx-2 mt-5 table w-full text-left">
          <thead>
            <tr className="font-poppins bg-ijo4 text-ijo1">
              <th className="py-2 pl-3">id</th>
              <th className="py-2 pl-3">Date</th>
              <th className="py-2 pl-3">Total Price</th>
              <th className="py-2 pl-3">Items</th>
              <th className="py-2 pl-3 text-ijo4">Edit</th>
              <th className="py-2 pl-3 text-ijo4">Delete</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((data) => (
              <tr key={data.id} className="font-medium text-black">
                <td className="py-4 pl-3 font-bold">{data.id}</td>
                <td className="py-2 pl-3">{formatDate(data.date)}</td>
                <td className="py-2 pl-3">{formatCurrency(data.totalPrice)}</td>
                <td className="text-overflow-ellipsis overflow-hidden whitespace-nowrap py-2 pl-3">
                  {data.items.map((item) => item.name).join(', ')}
                </td>
                <td className="py-2 pl-3">
                  <button
                    type="button"
                    className="cursor-pointer rounded bg-ijo3 px-4 py-2 text-white"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2 pl-3">
                  <button
                    type="button"
                    className="cursor-pointer rounded bg-merah-tumbas px-4 py-2 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex">
        <div className="w-1/6 flex-none bg-white" />

        <div className="w-2/3 flex-grow bg-white">
          <div className="pb-6 pt-8 text-3xl font-bold text-black">Update Order</div>

          <div className="pb-2 font-bold text-black">Date</div>
          <div className="pb-4">
            <input
              type="text"
              className="w-full rounded-md bg-gray-200 p-2 text-black"
              placeholder="Search..."
            />
          </div>

          <div className="pb-2 font-bold text-black">Items</div>
          <div className="flex flex-row gap-2 pb-4">
            <input
              type="text"
              className="w-32 rounded-md bg-gray-200 p-2 text-black"
              placeholder="Search..."
            />
            <div className="relative">
              <button
                type="button"
                className="w-44 cursor-pointer rounded bg-gray-200 px-4 py-2 text-white"
                onClick={() => setQuantity(!quantity)}
              >
                Ganti
              </button>
              {quantity && <div className="absolute w-full bg-yellow-200 text-black">kg</div>}{' '}
            </div>
          </div>

          <div className="pb-2 font-bold text-black">Total Price</div>
          <div className="pb-12">
            <input type="text" className="w-full rounded-md bg-gray-200 p-2 text-black" />
          </div>
        </div>

        <div className="white relative w-1/6 flex-none">
          <button
            type="button"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 transform cursor-pointer rounded bg-ijo3 px-4 py-2 font-bold text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
