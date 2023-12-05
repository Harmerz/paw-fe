import { useState } from 'react'
import { IoSaveSharp } from 'react-icons/io5'

import { usePostInventory } from '@/hooks/inventory';

export function Create() {
  
  const [inventoryData, setInventoryData] = useState({
    name: '',
    desc: '',
    quantity: '',
    qtype: '',
    type: '',
    price: '',
  });

  const postInventoryMutation = usePostInventory();

  const handleSave = async () => {

    try{
    await postInventoryMutation.mutateAsync(inventoryData);
    console.log('Inventory Data:', inventoryData);

    // Optionally, you can reset the form after saving
    setInventoryData({
      name: '',
      desc: '',
      quantity: '',
      qtype: '',
      type: '',
      price: '',
    });
  } catch (error) {
    console.error('Error posting inventory:', error)
  }
  };


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
            value={inventoryData.name}
            onChange={(e) => setInventoryData({ ...inventoryData, name: e.target.value})}
          />
        </div>

        <div className="pb-2 font-bold text-black">Description</div>
        <div className="pb-4">
          <input
            type="text"
            className="w-full rounded-md bg-gray-200 p-2 pb-28 text-black"
            placeholder="Daging kambing merupakan salah satu sumber protein yang berfungsi untuk..."
            value={inventoryData.desc}
            onChange={(e) => setInventoryData({ ...inventoryData, desc: e.target.value})}
          />
        </div>

        <div className="pb-2 font-bold text-black">Quantity</div>
        <div className="flex flex-row gap-2 pb-4">
          <input
            type="text"
            className="w-32 rounded-md bg-gray-200 p-2 text-black"
            placeholder="500"
            value={inventoryData.quantity}
            onChange={(e) => setInventoryData({ ...inventoryData, quantity: e.target.value})}
          />
          <div className="relative">
            <input
              type="text"
              className="w-32 rounded-md bg-gray-200 p-2 text-black"
              placeholder="kg"
              value={inventoryData.qtype}
              onChange={(e) => setInventoryData({ ...inventoryData, qtype: e.target.value})}
          />
          </div>
        </div>

        <div className="pb-2 font-bold text-black">Type</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[66px] w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder="Meat"
            value={inventoryData.type}
            onChange={(e) => setInventoryData({ ...inventoryData, type: e.target.value})}
          />
        </div>

        <div className="pb-2 font-bold text-black">Price (in USD)</div>
        <div className="pb-12">
          <input
            type="text"
            className="h-[66px] w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder="15"
            value={inventoryData.price}
            onChange={(e) => setInventoryData({ ...inventoryData, price: e.target.value})}
          />
        </div>
      </div>

      <div className="white relative w-1/6 flex-none">
        <button
          type="button"
          onClick={handleSave}
          className="absolute bottom-5 left-1/2 flex h-[48px] -translate-x-1/2 transform cursor-pointer items-center rounded bg-ijo3 px-4 py-2 font-bold text-white"
        >
          <IoSaveSharp className="mr-2" /> Save
        </button>
      </div>
    </div>
  )
}

export default Create
