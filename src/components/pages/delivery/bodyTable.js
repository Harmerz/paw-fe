import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

export function BodyTable() {
  // example
  const tableData = [
    {
      id: 1,
      recipient: 'Dadang',
      items: 'tempe, tahu, rendang',
      courier: 'Dudung',
      estimedtime: '22-11-2023',
    },
    {
      id: 2,
      recipient: 'Roy',
      items: 'rendang, tomat, tempe',
      courier: 'Dudung',
      estimedtime: '23-11-2023',
    },
    {
      id: 3,
      recipient: 'Glory',
      items: 'Tempe Pindang, rendang goreng',
      courier: 'Dudung',
      estimedtime: '24-11-2023',
    },
    {
      id: 4,
      recipient: 'Adit',
      items: 'Santan goreng',
      courier: 'Dudung',
      estimedtime: '27-11-2023',
    },
    {
      id: 5,
      recipient: 'Natasha',
      items: 'Ikan Pindang',
      courier: 'Dudung',
      estimedtime: '27-11-2023',
    },
    {
      id: 6,
      recipient: 'Bella',
      items: 'Rendang Pindang yang dikukus',
      courier: 'Dudung',
      estimedtime: '28-11-2023',
    },
    {
      id: 7,
      recipient: 'Dina',
      items: 'Es teh panas',
      courier: 'Dudung',
      estimedtime: '29-11-2023',
    },
    {
      id: 8,
      recipient: 'Dona',
      items: 'Sate goreng krispi kuah',
      courier: 'Kasian Dudung kerja Rodi',
      estimedtime: '30-11-2023',
    },
  ]

  return (
    <tbody>
      {tableData.map((data) => (
        <tr key={data.id} className="text-xs font-bold text-black md:text-base lg:text-xl">
          <td className="py-2 pl-3">{data.id}</td>
          <td className="py-4 pl-3">{data.recipient}</td>
          <td className="py-2 pl-3">{data.items}</td>
          <td className="py-2 pl-3">{data.courier}</td>
          <td className="py-2 pl-3">{data.estimedtime}</td>
          <td className="py-2 pl-3">
            <button
              type="button"
              className="flex items-center 
              items-center rounded 
              rounded 
              px-4 py-2 
              text-white"
            >
              <IoColorWandSharp className="mr-2" /> Edit
            </button>
          </td>
          <td className="py-2 pl-3">
            <button
              type="button"
              className="cursor-pointer 
              cursor-pointer items-center rounded 
              rounded 
              px-4 py-2 
              text-white"
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
