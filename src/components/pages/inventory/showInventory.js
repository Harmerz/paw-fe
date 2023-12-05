'use client'

import Link from 'next/link';
import { useEffect,useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { useGetInventory, usePostInventory } from '@/hooks/inventory';

export function Inventory({ children, selectedCategory, setSelectedCategory, searchTerm, setSearchTerm }) {
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
  ];

  const { mutate: addInventory } = usePostInventory();
  

  function handleClick() {
    addInventory();
  }

  const handleClickFilter = (category) => {
    // Toggle the category filter
    if (selectedCategory && selectedCategory.toLowerCase() === category.toLowerCase()) {
      setSelectedCategory(null); // Turn off the filter if the same category is clicked again
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Trigger filter or search action here
    }
  };
 

  useEffect(() => {
    console.log('Search term:', searchTerm);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white bg-contain">
      <div className="p-8">
        <div className="flex flex-col items-start">
          <div className="mb-4 sm:mb-12 ml-auto">
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
          <div className="flex items-center mb-4 sm:mb-8">
            <IoSearch className="absolute mx-4 mr-2 text-black" />
            <input
              type="text"
              className="mx-2 w-full sm:w-96 rounded-md bg-gray-200 p-2 pl-8 text-black"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="flex flex-wrap mt-4">
            {categories.map((category) => (
              <button type='button'
                key={category}
                className={`font-poppins mx-2 my-2 sm:my-0 cursor-pointer rounded-full border ${
                  selectedCategory &&
                  category.toLowerCase() === selectedCategory.toLowerCase()
                  ? 'border-white bg-orange-tumbas text-white'
                  : 'border-black bg-gray-200 text-black'
                } p-2 text-base font-bold text-black transition-colors duration-300 hover:border-white hover:bg-orange-tumbas hover:text-white`}
                onClick={() => handleClickFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <table className="mx-2 mt-5 table w-full text-left overflow-x-auto">
            <thead className="font-poppins bg-ijo4 text-ijo1">
              <tr>
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
  );
}

export default Inventory;
