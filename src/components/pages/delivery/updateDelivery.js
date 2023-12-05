'use client'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoSaveSharp } from 'react-icons/io5'

import { useGetDeliveryById, usePutDelivery } from '@/hooks/delivery'

export function Update({ id }) {
  const router = useRouter()
  const { data: deliveryData } = useGetDeliveryById(id)
  const deliveryDetail = deliveryData || {}

  const [recipient, setRecipient] = useState(deliveryDetail || '')
  const [orderItems, setOrderItems] = useState(deliveryDetail || '')
  const [courier, setCourier] = useState(deliveryDetail || '')
  const [estimedTime, setEstimedTime] = useState(deliveryDetail || '')

  const { mutate: updateDelivery } = usePutDelivery()

  const handleUpdate = async () => {
    try {
      await updateDelivery(id, {
        recipient,
        orderItems,
        courier,
        estimedTime,
        // Add other fields as needed
      })

      // Redirect to the show page after successful update
      router.push(`/delivery/${id}`)
    } catch (error) {
      console.error('Error updating delivery:', error)
    }
  }
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
        <div
          className="pb-6 pt-8 text-xl 
      font-bold text-black  
      md:text-2xl
      lg:text-3xl"
        >
          Update Delivery
        </div>
        <form onSubmit={handleUpdate}>
          <div>
            <div
              className="pb-2 text-xs 
             font-bold
            text-black
            md:text-sm
            lg:text-base"
            >
              Recipient Name
            </div>
            <div className="pb-4">
              <input
                type="text"
                className="h-[22px]  w-full 
              rounded-md bg-gray-200 
          p-3 text-xs
          text-black
          md:h-[44px] md:text-sm
          lg:h-[66px] lg:text-base"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Recipient Name"
              />
            </div>

            <div
              className="pb-2 text-xs 
      font-bold
      text-black
      md:text-sm
      lg:text-base"
            >
              Ordered Items
            </div>
            <div className="pb-4">
              <input
                type="text"
                className="h-[22px] w-full
          rounded-md bg-gray-200 
          p-3 text-xs 
          text-black 
          md:h-[44px] md:text-sm
          lg:h-[66px] lg:text-base"
                value={orderItems}
                onChange={(e) => setOrderItems(e.target.value)}
                placeholder="Ordered Items"
              />
            </div>

            <div
              className="pb-2 text-xs 
      font-bold
      text-black
      md:text-sm
      lg:text-base"
            >
              Courier Name
            </div>
            <div className="pb-4">
              <input
                type="text"
                className="h-[22px] w-full
          rounded-md bg-gray-200 
          p-3 text-xs 
          text-black 
          md:h-[44px] md:text-sm
          lg:h-[66px] lg:text-base"
                value={courier}
                onChange={(e) => setCourier(e.target.value)}
                placeholder="Courier Name"
              />
            </div>

            <div
              className="pb-2 text-xs 
      font-bold
      text-black
      md:text-sm
      lg:text-base"
            >
              Estimed Time
            </div>
            <div className="pb-12">
              <input
                type="text"
                className="h-[22px] w-full
          rounded-md bg-gray-200 
          p-3 text-xs 
          text-black 
          md:h-[44px] md:text-sm
          lg:h-[66px] lg:text-base"
                value={estimedTime}
                onChange={(e) => setEstimedTime(e.target.value)}
                placeholder="Estimed Time"
              />
            </div>
          </div>

          <div className="white relative w-1/6 flex-none">
            <button
              type="submit"
              className="absolute bottom-12  left-1/2 flex h-[48px] -translate-x-1/2 transform cursor-pointer 
          items-center rounded bg-ijo3 px-4 py-2 text-xs font-bold
          text-white
          md:text-sm
          lg:text-base"
            >
              <IoSaveSharp className="mr-2" /> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Update
