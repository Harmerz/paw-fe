import { useRouter } from 'next/navigation'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'
import { NavBar } from '@/components/elements/navbar'
import { useGetDelivery } from '@/hooks/delivery'
export function BodyTable() {
  const router = useRouter()
  const { data: deliveryData, isLoading, isError } = useGetDelivery()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading data</div>
  }

  console.log(deliveryData)

  const deliveryCard = deliveryData || []

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
              onClick={() => router.push(`/delivery/put/${data._id}`)}
            >
              <IoColorWandSharp className="mr-2" /> Edit
            </button>
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
              onClick={() => router.push(`/delivery/put/${data._id}`)}
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
