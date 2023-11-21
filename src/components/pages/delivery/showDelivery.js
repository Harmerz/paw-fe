import { IoSearch } from 'react-icons/io5'

export function Delivery({ children }) {
  return (
    <div className="min-h-screen bg-white bg-contain">
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 ml-auto">
            <button
              type="button"
              className="font-poppins 
              bg-ijo1 
              cursor-pointer 
              rounded 
              px-4 
              py-2 
              text-xs 
              text-white
              md:text-base
              lg:text-xl"
            >
              +Add Delivery
            </button>
          </div>
          <div className="relative mt-4 w-fit">
            <input
              type="text"
              className="
            mx-2 
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
          <div className="w-full overflow-x-auto rounded-lg shadow">
            <table className="mx-2 mt-5 table w-full text-left">
              <thead>
                <tr className="font-poppins bg-ijo4 text-ijo1 text-xs md:text-base lg:text-xl">
                  <th className="py-2 pl-3">Id</th>
                  <th className="py-2 pl-3">Recipient Name</th>
                  <th className="py-2 pl-3">Order Items</th>
                  <th className="py-2 pl-3">Courier</th>
                  <th className="py-2 pl-3">Estimed Time</th>
                  <th className="text-ijo4 py-2 pl-3">Edit</th>
                  <th className="text-ijo4 py-2 pl-3">Delete</th>
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

export default Delivery