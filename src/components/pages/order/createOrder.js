import 'react-datepicker/dist/react-datepicker.css'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import { IoAdd, IoCalendarSharp, IoChevronDownSharp, IoRemove, IoSaveSharp } from 'react-icons/io5'

import { NavBar } from '@/components/elements/navbar'
import { useGetInventory } from '@/hooks/inventory'
import { usePostOrder } from '@/hooks/order'

export function Create() {
  const router = useRouter()

  const [isShowItemDropdown, setShowItemDropdown] = useState(false)
  const [items, setItems] = useState([{}])
  const [selectedDate, setSelectedDate] = useState(null)

  const { mutate: PostOrder } = usePostOrder()

  const { data: inventoryData } = useGetInventory()
  const ref = useRef(null)
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!ref?.current?.contains(e.target) && isShowItemDropdown) setShowItemDropdown(false)
    })
  })

  const InventoryData = inventoryData || []

  const addItem = () => {
    setItems((prevItems) => [...prevItems, { id: Date.now(), quantity: 1, item: null }])
  }

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index))
  }

  const updateItem = (index, newItem) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems]
      updatedItems[index] = newItem
      return updatedItems
    })
  }

  const formatCurrency = (amount) => {
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount)
    return formattedAmount
  }

  const calculatePrice = (item) => {
    if (!item.item || !item.item.price || Number.isNaN(item.quantity)) {
      return 'Rp 0,00'
    }

    const totalPrice = item.item.price * item.quantity
    return formatCurrency(totalPrice)
  }

  const updateQuantityAndRecalculate = (index, newQuantity) => {
    const newItem = { ...items[index], quantity: newQuantity }
    updateItem(index, newItem)
  }

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      const itemPrice = item.item ? item.item.price * item.quantity : 0
      return total + itemPrice
    }, 0)
  }

  function handleAddData() {
    const orderData = {
      date: selectedDate ? selectedDate.toISOString() : new Date().toISOString(),
      items: items.map((item) => ({
        inventory: {
          inventoryId: item.item._id,
          name: item.item.name,
        },
        inventoryId: item.id,
        quantity: item.quantity,
        price: item.item.price,
      })),
      totalPrice: calculateTotalPrice(),
    }

    PostOrder(orderData)

    router.replace('/order')
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="flex min-h-screen">
        <div
          className={`${
            typeof window !== 'undefined' && window.innerWidth <= 768 ? 'ml-8 mr-8' : 'ml-20 mr-20'
          } w-full flex-grow bg-white`}
        >
          <div className="pb-6 pt-8 text-3xl font-bold text-black">Create Order</div>

          <div className="pb-2 font-bold text-black">Date</div>
          <div className="relative w-full pb-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              className="w-full rounded-md bg-gray-200 text-black"
              placeholderText="Select Date"
              customInput={
                <div className="relative w-full">
                  <input
                    className="h-[66px] w-full rounded-md bg-gray-200 p-2 text-black"
                    value={selectedDate ? selectedDate.toLocaleDateString('id-ID') : ''}
                    placeholder="Select Date"
                    readOnly
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                    <IoCalendarSharp className="text-black" />
                  </div>
                </div>
              }
            />
          </div>

          <div className="pb-2 font-bold text-black">Items</div>
          <div className="flex flex-col gap-2 pb-4" style={{ width: '100%' }}>
            {items.map((item, index) => (
              <div key={item.id} className="relative flex flex-row items-center gap-2">
                <button
                  ref={ref}
                  type="button"
                  className="flex h-[66px] w-40 cursor-pointer flex-row items-center justify-between rounded bg-gray-200 px-4 py-4 text-black"
                  onClick={() => setShowItemDropdown(!isShowItemDropdown)}
                >
                  <div />
                  {item.item ? (
                    <span className="text-left text-black">{item.item.name}</span>
                  ) : (
                    <span className="text-left text-gray-400">Item Name</span>
                  )}
                  <IoChevronDownSharp className="ml-2 text-black" />
                </button>
                {isShowItemDropdown && (
                  <div className="absolute top-[100%] mt-1 max-h-[400px] w-fit overflow-y-scroll rounded border border-gray-300 bg-white">
                    {InventoryData.map((inventoryItem) => (
                      <div
                        key={inventoryItem._id}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => {
                          updateItem(index, {
                            ...item,
                            item: inventoryItem,
                            id: inventoryItem._id,
                            quantity: 1,
                          })
                          setShowItemDropdown(false)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            updateItem(index, {
                              ...item,
                              item: inventoryItem,
                              id: inventoryItem._id,
                              quantity: 1,
                            })
                            setShowItemDropdown(false)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <span className="text-black">{inventoryItem.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex h-[66px] items-center rounded-md bg-gray-200 p-3">
                  <input
                    type="number"
                    className="w-14 rounded-md bg-gray-200 p-2 text-black"
                    placeholder="1"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10) || 1
                      updateQuantityAndRecalculate(index, newQuantity)
                    }}
                  />
                  <span className="ml-2 font-medium text-black">
                    @Rp {item.item ? item.item.price : ''}/{item.item ? item.item.qtype : 'Unit'}
                  </span>
                </div>

                <div className="flex h-[66px] items-center rounded-md bg-gray-200 p-3">
                  <span className="font-regular ml-2 text-black">{calculatePrice(item)}</span>
                </div>

                {index === items.length - 1 && (
                  <>
                    <button
                      type="button"
                      className="cursor-pointer items-center font-bold text-red-600"
                      onClick={() => removeItem(index)}
                    >
                      <IoRemove className="ml-2" size={24} />
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer items-center font-bold text-black"
                      onClick={addItem}
                    >
                      <IoAdd className="ml-2" size={24} />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="pb-2 font-bold text-black">Total Price</div>
          <div className="flex h-[66px] w-full items-center rounded-md bg-gray-200 p-3 text-black">
            {formatCurrency(calculateTotalPrice())}
          </div>
        </div>
      </div>
      <div className="white relative w-1/6 flex-none">
        <button
          type="button"
          className="fixed bottom-8 right-8 flex h-[48px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center rounded bg-ijo3 px-4 py-2 font-bold text-white"
          onClick={handleAddData}
        >
          <IoSaveSharp className="mr-2" /> Save
        </button>
      </div>
    </div>
  )
}

export default Create
