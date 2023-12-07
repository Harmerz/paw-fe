import Link from 'next/link'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

import { useDeleteDelivery, useGetDelivery } from '@/hooks/delivery'

export function BodyTable() {
  const { data: deliveryData, isLoading, refetch } = useGetDelivery()
  const { mutate: deleteDelivery, isError } = useDeleteDelivery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading data</div>
  }

  const deliveryCard = deliveryData || []

  const handleDelete = async (id) => {
    try {
      await deleteDelivery(id)
      // After successful deletion, you may want to refetch the data or update the state.
      refetch()
    } catch (error) {
      console.error('Error deleting delivery:', error)
    }
  }

  return (
    <tbody>
      {deliveryCard.map((data, index) => (
        <tr key={data._id} className="text-xs font-bold text-black md:text-base lg:text-xl">
          <td className="py-2 pl-3">{index + 1}</td>
          <td className="py-4 pl-3">{data.recipient}</td>
          <td className="py-2 pl-3">{data.orderItems}</td>
          <td className="py-2 pl-3">{data.courier}</td>
          <td className="py-2 pl-3">{data.estimedTime}</td>
          <td className="font-poppins cursor-pointer rounded">
            <Link href={`/delivery/${data._id}`} passHref>
              <button
                type="button"
                className="flex items-center 
              items-center rounded 
              rounded 
              bg-ijo1 px-4 
              px-4
              py-2 
              pl-3 
              text-white"
              >
                <IoColorWandSharp className="mr-2" /> Edit
              </button>
            </Link>
          </td>
          <td className="font-poppins cursor-pointer rounded">
            <button
              type="button"
              className="item-center
              flex cursor-pointer 
              cursor-pointer items-center rounded 
              rounded 
              bg-merah-tumbas px-4 
              px-4
              py-2 
              pl-3 
              text-white"
              onClick={() => handleDelete(data._id)}
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
