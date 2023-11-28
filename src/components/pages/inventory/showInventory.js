import { IoSearch } from 'react-icons/io5'
import { usePostInventory, useGetInventory } from '@/hooks/inventory'

export function Inventory({ children }) {
  const categories = [
    'Meat & Egg',
    'Fish',
    'Fruits',
    'Vegetables',
    'Sauce',
    'Grain',
    'Spices',
    'Dairy',
    'Herbs',
    'Bakery',
    'Snack',
  ]

  const {mutate: addInventory} = usePostInventory()
  const {data: DataKris} = useGetInventory()
  console.log(DataKris)
  function handleClick(){
    addInventory()
  }
  return (
    <div className="min-h-screen bg-white bg-contain">
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 ml-auto">
            <button
            onClick={handleClick}
              type="button"
              className="font-poppins cursor-pointer rounded bg-ijo1 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
            >
              +Add Inventory
            </button>
          </div>
          <div className="flex items-center">
            <IoSearch className="absolute mx-4 mr-2 text-black" />
            <input type="text" className="mx-2 w-96 rounded-md bg-gray-200 p-2 pl-8 text-black" />
          </div>
          <div className="mt-4 flex">
            {categories.map((category) => (
              <div
                key={category}
                className="font-poppins mx-2 cursor-pointer rounded-full border border-black bg-gray-200 p-2 text-base font-bold text-black transition-colors duration-300 hover:border-white hover:bg-orange-tumbas hover:text-white"
              >
                {category}
              </div>
            ))}
          </div>
          <table className="mx-2 mt-5 table w-full text-left">
            <thead>
              <tr className="font-poppins bg-ijo4 text-ijo1">
                <th className="py-2 pl-3">id</th>
                <th className="py-2 pl-3">Name</th>
                <th className="py-2 pl-3">Description</th>
                <th className="py-2 pl-3">Price</th>
                <th className="py-2 pl-3">Qty</th>
                <th className="py-2 pl-3">Unit</th>
                <th className="py-2 pl-3">Type</th>
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

export default Inventory
