import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'
import { LuLoader } from 'react-icons/lu'

import { useDeleteOrder, useGetOrder } from '@/hooks/order'

export function BodyTable({ search }) {
  const { data: orderData, isLoading } = useGetOrder()
  const { mutate: OrderDelete, isError } = useDeleteOrder()
  const [tableData, setTableData] = useState(orderData ?? [])
  const { data: session } = useSession()

  useEffect(() => {
    let filteredData = orderData
    // Filter the data if search query exists
    if (search) {
      const regex = new RegExp(search, 'i')
      filteredData = orderData.filter((order) => {
        const hasMatchingItem = order.items.some((item) => regex.test(item.inventory.name))
        return hasMatchingItem
      })
    }

    setTableData(filteredData)
  }, [orderData, search])

  // Show loading content if it is in loading state
  if (isLoading) {
    return (
      <tbody className="flex h-[60vh] max-h-[60vh] w-full items-center justify-center overflow-auto">
        <LuLoader className=" h-10 w-10 animate-spin text-black" />
      </tbody>
    )
  }

  // Show error message if it exists
  if (isError) {
    return (
      <tbody className="flex h-[60vh] max-h-[60vh] w-full items-center justify-center overflow-auto border">
        <LuLoader className=" h-10 w-10 animate-spin text-black" />
        There is Error when fetch the data
      </tbody>
    )
  }

  function handleDelete(id) {
    OrderDelete(id)
  }

  // Format date to dd/mm/yyyy
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  // Format to USD Currency
  const formatCurrency = (amount) => {
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
    return formattedAmount
  }

  // Join all inventory name into String
  const joinItemsToString = (items) => {
    const displayedItems = items.slice(
      0,
      typeof window !== 'undefined' && window.innerWidth <= 768 ? 3 : 6,
    )

    return displayedItems.map((item) => item.inventory.name).join(', ')
  }
  return (
    <tbody>
      {tableData?.map((data, index) => (
        <tr key={data.id} className="border text-xs font-medium text-black md:text-base lg:text-xl">
          <td className="py-4 pl-3 font-bold">{index + 1}</td>
          <td className="py-2 pl-3">{formatDate(data.date)}</td>
          <td className="py-2 pl-3">{formatCurrency(data.totalPrice)}</td>
          <td className="text-overflow-ellipsis overflow-hidden whitespace-nowrap py-2 pl-3 font-medium">
            {joinItemsToString(data.items)}
          </td>
          {session?.user?.role === 'admin' && (
            <>
              <td className="py-2 pl-3">
                <Link href={`/order/${data._id}`}>
                  <button
                    type="button"
                    className="flex cursor-pointer items-center rounded bg-ijo3 px-4 py-2 text-white"
                  >
                    <IoColorWandSharp className="mr-2" /> Edit
                  </button>
                </Link>
              </td>
              <td className="py-2 pl-3">
                <button
                  // eslint-disable-next-line no-underscore-dangle
                  onClick={() => handleDelete(data._id)}
                  type="button"
                  className="flex cursor-pointer items-center rounded bg-merah-tumbas px-4 py-2 text-white"
                >
                  <IoTrashBinSharp className="mr-2" /> Delete
                </button>
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  )
}

export default BodyTable
