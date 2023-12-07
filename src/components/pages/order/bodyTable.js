import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

import { useDeleteOrder, useGetOrder } from '@/hooks/order'

export function BodyTable({search}) {
  const { data: orderData, isLoading } = useGetOrder()
  const { mutate: OrderDelete, isError } = useDeleteOrder()
  const [tableData, setTableData] = useState(orderData ?? [])

  useEffect(() => {
    let filteredData = orderData
    if (search) {
      const regex = new RegExp(search, 'i')
      filteredData = orderData.filter((order) => {
        const hasMatchingItem = order.items.some((item) => regex.test(item.inventory.name))
        return hasMatchingItem
      })
    }

    setTableData(filteredData)
  }, [orderData, search])

  console.log(orderData)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading data</div>
  }

  function handleDelete(id) {
    OrderDelete(id)
  }

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

    return displayedItems.map((item) => item.inventory.name).join(', ')
  }
  return (
    <tbody>
      {tableData?.map((data, index) => (
        <tr key={data.id} className="text-xs font-medium text-black md:text-base lg:text-xl">
          <td className="py-4 pl-3 font-bold">{index + 1}</td>
          <td className="py-2 pl-3">{formatDate(data.date)}</td>
          <td className="py-2 pl-3">{formatCurrency(data.totalPrice)}</td>
          <td className="text-overflow-ellipsis overflow-hidden whitespace-nowrap py-2 pl-3 font-medium">
            {joinItemsToString(data.items)}
          </td>
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
        </tr>
      ))}
    </tbody>
  )
}

export default BodyTable
