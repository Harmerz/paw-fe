import React from 'react';

export default function Inventory() {
  const categories = [
    'Meat & Egg',
    'Fruits',
    'Vegetables',
    'Sauce',
    'Grain',
    'Spices',
    'Dairy',
    'Herbs',
    'Bakery',
    'Snack',
  ];

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-start">
        <div className="ml-auto mb-12">
          <button className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer font-poppins text-base sm:text-lg lg:text-xl">+Add Inventory</button>
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-md w-96"
            placeholder="Search..."
          />
        </div>
        <div className="flex mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-200 p-2 rounded-full mx-2 cursor-pointer font-bold font-poppins transition-colors duration-300 text-black border border-black hover:text-white hover:bg-orange-500 hover:border-white"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
