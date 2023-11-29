'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoSaveSharp } from 'react-icons/io5'

import { useGetDeliveryById, usePutDelivery } from '@/hooks/delivery'

export function UpdateDelivery({ deliveryData }) {
  const router = useRouter()
  const { id } = router.query
  const deliveryDetail = deliveryData || []

  const [formData, setFormData] = useState({
    name: deliveryDetail.recpient,
    description: deliveryDetail.items,
    ingredient: deliveryDetail.courier,
    instruction: deliveryDetail.estimedtime,
  })

  const { mutate: editDelivery } = usePutDelivery()
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await editDelivery(id, formData)
      // eslint-disable-next-line no-underscore-dangle
      router.push(`/delivery/${deliveryDetail._id}`)
    } catch (error) {
      console.error('Error updating recipe:', error)
    }
  }
  console.log(editDelivery)

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
        <div onSubmit={handleSubmit}>
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
              value={formData.recpient}
              onChange={handleChange}
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
              value={formData.items}
              onChange={handleChange}
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
              value={formData.courier}
              onChange={handleChange}
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
              value={formData.estimedtime}
              onChange={handleSubmit}
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
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    // Di sini Anda dapat menambahkan logika untuk menghubungkan dan mengambil resep dari MongoDB
    const { mutate: delivery } = useGetDeliveryById
    // const recipe = await useGetOneRecipe(id) // Fungsi untuk mendapatkan resep dari MongoDB berdasarkan ID

    // Mengembalikan data resep sebagai properti untuk komponen halaman
    return {
      props: {
        delivery,
      },
    }
  } catch (error) {
    console.error('Error fetching delivery:', error)
    // Jika terjadi kesalahan, mengembalikan properti resep kosong untuk menghindari kesalahan saat render
    return {
      props: {
        delivery: {},
      },
    }
  }
}

export default UpdateDelivery
