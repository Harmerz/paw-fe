'use client'

import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

import { NavBar } from '@/components/elements/navbar'

export default function Order() {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
  }

  const formatCurrency = (amount) => {
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
    <div className="min-h-screen bg-white bg-contain">
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
                <tr key={data.id} className="font-bold text-black">
                  <td className="py-4 pl-3">{data.id}</td>
                  <td className="py-2 pl-3">{formatDate(data.date)}</td>
                  <td className="py-2 pl-3">{formatCurrency(data.totalPrice)}</td>
                  <td className="text-overflow-ellipsis overflow-hidden whitespace-nowrap py-2 pl-3 font-medium">
                    {data.items.map((item) => item.name).join(', ')}
                  </td>
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
