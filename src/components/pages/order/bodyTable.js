import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

export function BodyTable() {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const formatCurrency = (amount) => {
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount)
    return formattedAmount
  }

  const joinItemsToString = (items) => {
    const displayedItems = items.slice(
      0,
      typeof window !== 'undefined' && window.innerWidth <= 768 ? 3 : 6,
    )

    return displayedItems.map((item) => item.name).join(', ')
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
    <tbody>
      {tableData.map((data) => (
        <tr key={data.id} className="text-xs font-medium text-black md:text-base lg:text-xl">
          <td className="py-4 pl-3 font-bold">{data.id}</td>
          <td className="py-2 pl-3">{formatDate(data.date)}</td>
          <td className="py-2 pl-3">{formatCurrency(data.totalPrice)}</td>
          <td className="text-overflow-ellipsis overflow-hidden whitespace-nowrap py-2 pl-3 font-medium">
            {joinItemsToString(data.items)}
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
  )
}

export default BodyTable
