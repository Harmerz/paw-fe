import { IoSaveSharp } from 'react-icons/io5'

export function Create() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
        <div
          className="pb-6 pt-8 text-xl 
        font-bold text-black  
        md:text-2xl
        lg:text-3xl"
        >
          Create Delivery
        </div>

        <div
          className="pb-2 text-xs 
        font-bold
        text-black
        md:text-sm
        lg:text-base"
        >
          Recipient Name
        </div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-full 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Tono"
          />
        </div>

        <div
          className="pb-2 text-xs 
        font-bold
        text-black
        md:text-sm
        lg:text-base"
        >
          Ordered Items
        </div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px] w-full
            rounded-md bg-gray-200 
            p-3 text-xs 
            text-black 
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Sate rendang Kukus"
          />
        </div>

        <div
          className="pb-2 text-xs 
        font-bold
        text-black
        md:text-sm
        lg:text-base"
        >
          Courier Name
        </div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px] w-full
            rounded-md bg-gray-200 
            p-3 text-xs 
            text-black 
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="Dudung"
          />
        </div>

        <div
          className="pb-2 text-xs 
        font-bold
        text-black
        md:text-sm
        lg:text-base"
        >
          Estimed Time
        </div>
        <div className="pb-12">
          <input
            type="text"
            className="h-[22px] w-full
            rounded-md bg-gray-200 
            p-3 text-xs 
            text-black 
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            placeholder="23-11-2023"
          />
        </div>
      </div>

      <div className="white relative w-1/6 flex-none">
        <button
          type="button"
          className="absolute bottom-12  left-1/2 flex h-[48px] -translate-x-1/2 transform cursor-pointer 
          items-center rounded bg-ijo3 px-4 py-2 font-bold text-white
          text-xs
          md:text-sm
          lg:text-base"
        >
          <IoSaveSharp className="mr-2" /> Save
        </button>
      </div>
    </div>
  )
}

export default Create
