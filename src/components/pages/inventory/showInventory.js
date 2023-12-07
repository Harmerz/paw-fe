'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { IoSearch } from 'react-icons/io5'

import { NavBar } from '@/components/elements/navbar'
import { usePostInventory } from '@/hooks/inventory'

export function Inventory({
  children,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}) {
  const categories = [
    'Meat',
    'Fish',
    'Fruit',
    'Vegetables',
    'Sauce',
    'Grains',
    'Spices',
    'Dairy',
    'Herbs',
    'Bakery',
    'Snack',
    'Noodles',
    'Others',
  ]
  const { data: session } = useSession()
  const { mutate: addInventory } = usePostInventory()

  function handleClick() {
    addInventory()
  }

  const handleClickFilter = (category) => {
    // Toggle the category filter
    if (selectedCategory && selectedCategory.toLowerCase() === category.toLowerCase()) {
      setSelectedCategory(null) // Turn off the filter if the same category is clicked again
    } else {
      setSelectedCategory(category)
    }
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="min-h-screen bg-white bg-contain">
      <NavBar />
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="flex w-full flex-row justify-between">
            <div className="mb-4 flex items-center sm:mb-8">
              <IoSearch className="absolute mx-4 mr-2 text-black" />
              <input
                type="text"
                className="mx-2 w-full rounded-md bg-gray-200 p-2 pl-8 text-black sm:w-96"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
            </div>
            {session?.user?.role === 'admin' && (
              <div className="mb-4 ml-auto sm:mb-12">
                <Link href="/inventory/create" passHref>
                  <button
                    onClick={handleClick}
                    type="button"
                    className="font-poppins cursor-pointer rounded bg-ijo1 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
                  >
                    +Add Inventory
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`font-poppins cursor-pointer rounded-lg border sm:my-0 ${
                  selectedCategory && category.toLowerCase() === selectedCategory.toLowerCase()
                    ? 'border-white bg-orange-tumbas text-white'
                    : 'border-black bg-gray-200 text-black'
                } p-2 text-base font-bold text-black transition-colors duration-300 hover:border-white hover:bg-orange-tumbas hover:text-white`}
                onClick={() => handleClickFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <table className="mx-2 mt-5 table w-full overflow-x-auto text-left">
            <thead className="font-poppins table w-full table-fixed bg-ijo4 text-ijo1">
              <tr>
                <th className="w-[40px] py-2 pl-3">No</th>
                <th className="w-[15%] py-2 pl-3">Name</th>
                <th className="py-2 pl-3">Description</th>
                <th className="w-[100px] py-2 pl-3">Price</th>
                <th className="w-[100px] py-2 pl-3">Qty</th>
                <th className="w-[100px] py-2 pl-3">Unit</th>
                <th className="w-[100px] py-2 pl-3">Type</th>
                {session?.user?.role === 'admin' && (
                  <>
                    <th className="py-2 pl-3 text-ijo4">Edit</th>
                    <th className="py-2 pl-3 text-ijo4">Delete</th>
                  </>
                )}
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
