import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

export function BodyTable() {
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
  )
}

export default BodyTable
