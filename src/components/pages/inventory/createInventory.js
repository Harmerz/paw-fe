import { useState } from 'react'
import { IoChevronDownSharp, IoSaveSharp } from 'react-icons/io5'

export function Create() {
  const [quantity, setQuantity] = useState(false)
  const [typeQty, setTypeQty] = useState(' ')
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
        <div className="pb-6 pt-8 text-3xl font-bold text-black">Create Inventory</div>

        <div className="pb-2 font-bold text-black">Name</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[66px] w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder="Daging kambing"
          />
        </div>

        <div className="pb-2 font-bold text-black">Description</div>
        <div className="pb-4">
          <input
            type="text"
            className="w-full rounded-md bg-gray-200 p-2 pb-28 text-black"
            placeholder="Daging kambing merupakan salah satu sumber protein yang berfungsi untuk..."
          />
        </div>

        <div className="pb-2 font-bold text-black">Quantity</div>
        <div className="flex flex-row gap-2 pb-4">
          <input
            type="text"
            className="w-32 rounded-md bg-gray-200 p-2 text-black"
            placeholder="500"
          />
          <div className="relative">
            <button
              type="button"
              className="flex h-[66px] w-44 cursor-pointer flex-row items-center justify-between rounded bg-gray-200 px-4 py-4 text-black"
              onClick={() => setQuantity(!quantity)}
            >
              <div />
              {typeQty}
              <IoChevronDownSharp className="text-black" />
            </button>
            {quantity && (
              <div className="absolute w-full bg-yellow-200 text-black">
                <button
                  onClick={() => setTypeQty('kg')}
                  type="button"
                  className="w-full p-2 hover:bg-yellow-400"
                >
                  kg
                </button>
                <button
                  onClick={() => setTypeQty('pcs')}
                  type="button"
                  className="w-full p-2 hover:bg-yellow-400"
                >
                  pcs
                </button>
                <button
                  onClick={() => setTypeQty('bottles')}
                  type="button"
                  className="w-full p-2 hover:bg-yellow-400"
                >
                  bottles
                </button>
              </div>
            )}{' '}
          </div>
        </div>

        <div className="pb-2 font-bold text-black">Type</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[66px] w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder="Daging"
          />
        </div>

        <div className="pb-2 font-bold text-black">Price</div>
        <div className="pb-12">
          <input
            type="text"
            className="h-[66px] w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder="Rp 10.000"
          />
        </div>
      </div>

      <div className="white relative w-1/6 flex-none">
        <button
          type="button"
          className="absolute bottom-5 left-1/2 flex h-[48px] -translate-x-1/2 transform cursor-pointer items-center rounded bg-ijo3 px-4 py-2 font-bold text-white"
        >
          <IoSaveSharp className="mr-2" /> Save
        </button>
      </div>
    </div>
  )
}

export default Create
