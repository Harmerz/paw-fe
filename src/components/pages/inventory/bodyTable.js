import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

import { useDeleteInvetory, useGetInventory, usePostInventory } from '@/hooks/inventory'

export function BodyTable() {
  const { data: inventoryData, isLoading } = useGetInventory()
  const { mutate: InventoryDelete, isError } = useDeleteInvetory()
  const { mutate: PostInvetory } = usePostInventory()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading data</div>
  }
  console.log(inventoryData)

  const tableData = inventoryData || []

  function handleDelete(id) {
    console.log('delete', id)
    InventoryDelete({ id })
    PostInvetory({
      desc: 'Ikan yang ada di promosi KFC Malaysia',
      name: 'Ikan Bilis',
      price: 2.2,
      qtype: 'kg',
      quantity: 98,
      type: 'fish',
    })
  }
  console.log(isError)

  return (
    <tbody>
      {tableData.map((data, index) => (
        <tr key={data.id} className="font-bold text-black">
          <td className="py-4 pl-3">{index + 1}</td>
          <td className="py-2 pl-3">{data.name}</td>
          <td className="py-2 pl-3">{data.desc}</td>
          <td className="py-2 pl-3">{data.price}</td>
          <td className="py-2 pl-3">{data.quantity}</td>
          <td className="py-2 pl-3">{data.qtype}</td>
          <td className="py-2 pl-3">{data.type}</td>
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
              onClick={() => handleDelete(data._id)}
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
