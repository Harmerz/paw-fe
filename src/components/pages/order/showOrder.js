import { NavBar } from '@/components/elements/navbar'

export function Order({ children }) {
  return (
    <div className="min-h-screen bg-white bg-contain">
      <NavBar />
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 ml-auto">
            <button
              type="button"
              className="font-poppins cursor-pointer rounded bg-ijo1 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
            >
              +Add Order
            </button>
          </div>
          <div>
            <input
              type="text"
              className="mx-2 w-96 rounded-md bg-gray-200 p-2"
              placeholder="Search..."
            />
          </div>
          <table className="mx-2 mt-5 table w-full text-left">
            <thead>
              <tr className="font-poppins bg-ijo4 text-ijo1">
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
  )
}

export default Order
