import React from 'react';

export default function Inventory() {
  return (
    <div className="bg-white flex justify-between p-8">
      <div></div>
      <div>
        <button className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer font-poppins text-base sm:text-lg lg:text-xl">+Add Inventory</button>
      </div>
    </div>
  );
}
