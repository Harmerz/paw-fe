'use client'

import { IoSaveSharp } from 'react-icons/io5'

export default function Create() {
  return (
    <div className="relative flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
        <div className="pb-6 pt-8 text-md md:text-xl lg:text-3xl font-bold text-black">Create Recipe</div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Name</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Nama masakan"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Description</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Deskripsi dari masakan"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Ingredients</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Bahan-bahan dari masakan"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Instructions</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Langkah-langkah dalam memasak masakan"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Image</div>
        <div className="relative pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Unggah foto masakan anda"
          />
        </div>

        <div className="white relative w-1/6 flex-none">
          <button
            type="button"
            className="bottom-0 right-0 mb-2 mr-2 flex cursor-pointer items-center justify-end space-x-2 rounded bg-ijo3 px-4 py-2 text-xs text-white md:text-sm lg:text-base"
          >
            <IoSaveSharp className="mr-2" /> Save
          </button>
        </div>
      </div>
    </div>
  )
}
