import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

export function BodyTable() {
  // example
  const tableData = [
    {
      id: 1,
      recipient: 'Dadang',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
    {
      id: 1,
      recipient: 'Product 1',
      items: 'Description 1',
      courier: 'Type 1',
      estimedtime: 10,
    },
  ]

  return (
    <tbody>
      {tableData.map((data) => (
        <tr key={data.id} className="font-bold text-black">
          <td className="py-2 pl-3">{data.id}</td>
          <td className="py-4 pl-3">{data.recipient}</td>
          <td className="py-2 pl-3">{data.items}</td>
          <td className="py-2 pl-3">{data.courier}</td>
          <td className="py-2 pl-3">{data.estimedtime}</td>
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
