'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'
import { LuLoader } from 'react-icons/lu'

import { useDeleteInvetory, useGetInventory } from '@/hooks/inventory'

export function BodyTable({ category, search }) {
  const { data: inventoryData, isLoading, refetch } = useGetInventory()
  const { mutate: InventoryDelete, isError } = useDeleteInvetory()
  const [tableData, setTableData] = useState(inventoryData ?? [])
  const { data: session } = useSession()

  useEffect(() => {
    let filteredData = inventoryData

    if (category) {
      filteredData = filteredData.filter((e) => e.type === category?.toLowerCase())
    }

    if (search) {
      const regex = new RegExp(search, 'i')
      filteredData = filteredData.filter((e) => regex.test(e.name) || regex.test(e.desc))
    }

    setTableData(filteredData)
  }, [inventoryData, category, search])

  if (isLoading) {
    return (
      <tbody className="flex h-[60vh] max-h-[60vh] w-full items-center justify-center overflow-auto border">
        <LuLoader className=" h-10 w-10 animate-spin text-black" />
      </tbody>
    )
  }

  if (isError) {
    return (
      <tbody className="flex h-[60vh] max-h-[60vh] w-full items-center justify-center overflow-auto border">
        <LuLoader className=" h-10 w-10 animate-spin text-black" />
        There is Error when fetch the data
      </tbody>
    )
  }

  function handleDelete(id) {
    InventoryDelete(id)
    refetch()
  }

  return (
    <tbody className="block h-[60vh] max-h-[60vh] w-full overflow-auto border">
      {tableData?.map((data, index) => (
        <tr
          key={data?._id}
          className="table w-full table-fixed border-b font-bold text-black hover:bg-slate-200"
        >
          <td className="w-[40px] py-2 pl-3 sm:py-4 sm:pl-4">{index + 1}</td>
          <td className="w-[15%] py-2 pl-3 sm:py-4 sm:pl-4">{data?.name}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data?.desc}</td>
          <td className="w-[100px] py-2 pl-3 sm:py-4 sm:pl-4">{data?.price}</td>
          <td className="w-[100px] py-2 pl-3 sm:py-4 sm:pl-4">{data?.quantity}</td>
          <td className="w-[100px] py-2 pl-3 sm:py-4 sm:pl-4">{data?.qtype}</td>
          <td className="w-[100px] py-2 pl-3 sm:py-4 sm:pl-4">{data?.type}</td>
          {session?.user?.role === 'admin' && (
            <>
              <td className="py-2 pl-3 sm:py-4 sm:pl-4">
                <Link href={`/inventory/${data?._id}`} passHref>
                  <button
                    type="button"
                    className="mb-2 flex cursor-pointer items-center rounded bg-ijo3 px-2 py-1 text-white sm:mb-0 sm:px-4 sm:py-2"
                  >
                    <IoColorWandSharp className="mr-2" /> Edit
                  </button>
                </Link>
              </td>
              <td className="py-2 pl-3 sm:py-4 sm:pl-4">
                <button
                  onClick={() => handleDelete(data._id)}
                  type="button"
                  className="flex cursor-pointer items-center rounded bg-merah-tumbas px-2 py-1 text-white sm:px-4 sm:py-2"
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
