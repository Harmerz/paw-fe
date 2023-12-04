import { useRouter } from 'next/navigation'
import { IoSearch } from 'react-icons/io5'

import { NavBar } from '@/components/elements/navbar'

export function Order({ children }) {
  const router = useRouter()

  const handleAddOrderClick = () => {
    router.push('/order/create')
  }

  return (
    <div className="min-h-screen bg-white bg-contain">
      <NavBar />
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 ml-auto">
            <button
              type="button"
              className="font-poppins cursor-pointer rounded bg-ijo1 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
              onClick={handleAddOrderClick}
            >
              +Add Order
            </button>
          </div>
          <div className="w-full overflow-x-auto rounded-lg p-2 shadow">
            <div className="relative mt-4 w-fit">
              <input
                type="text"
                className="mx
            h-[34px]
            w-[342px]
            rounded-md
            bg-gray-200
            p-2
            pl-9 
            text-xs
            text-black
            md:h-[40px]
            md:w-[371px]
            md:pl-10
            md:text-base 
            lg:h-[46px] 
            lg:w-[400px] 
            lg:pl-11
            lg:text-xl"
                placeholder="Search..."
              />
              <IoSearch
                className="absolute left-5 top-1/2 
            h-[12px]
            w-[12px]
            -translate-y-1/2 text-xs text-black
            md:h-[18px] md:w-[18px] md:text-base 
            lg:h-[24px] lg:w-[24px] lg:text-xl"
              />
            </div>
            <table className="mx-2 mt-5 table w-full text-left">
              <thead>
                <tr className="font-poppins bg-ijo4 text-xs text-ijo1 md:text-base lg:text-xl">
                  <th className="py-2 pl-3">id</th>
                  <th className="py-2 pl-3">Date</th>
                  <th className="py-2 pl-3">Total Price</th>
                  <th className="py-2 pl-3">Items</th>
                  <th className="py-2 pl-3 text-ijo4">Edit</th>
                  <th className="py-2 pl-3 text-ijo4">Delete</th>
                </tr>
              </thead>
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
