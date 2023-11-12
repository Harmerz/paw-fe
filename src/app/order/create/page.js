'use client'

import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { IoAdd, IoCalendarSharp, IoChevronDownSharp, IoRemove, IoSaveSharp } from 'react-icons/io5'

export default function Create() {
  const [isShowItemDropdown, setShowItemDropdown] = useState(false)
  const [items, setItems] = useState([{}])
  const [selectedDate, setSelectedDate] = useState(null)

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

  const InventoryData = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: 10.0, // Now it's a number
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: 15.0, // Now it's a number
    },
    {
      id: 3,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: 10.0, // Now it's a number
    },
    {
      id: 4,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: 15.0, // Now it's a number
    },
    {
      id: 5,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: 10.0, // Now it's a number
    },
    {
      id: 6,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: 15.0, // Now it's a number
    },
    {
      id: 7,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: 10.0, // Now it's a number
    },
    {
      id: 8,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: 15.0, // Now it's a number
    },
    {
      id: 9,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Type 1',
      qty: 10,
      unit: 'kg',
      price: 10.0, // Now it's a number
    },
    {
      id: 10,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Type 2',
      qty: 20,
      unit: 'pcs',
      price: 15.0, // Now it's a number
    },
  ]

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
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
                type="button"
                className="flex h-[66px] cursor-pointer flex-row items-center justify-between rounded bg-gray-200 px-4 py-4 text-black"
                onClick={() => setShowItemDropdown(!isShowItemDropdown)}
              >
                <div />
                {item.item && <span className="text-left text-black">{item.item.name}</span>}
                <IoChevronDownSharp className="ml-2 text-black" />
              </button>
              {isShowItemDropdown && (
                <div className="absolute mt-1 w-full rounded border border-gray-300 bg-white">
                  {InventoryData.map((inventoryItem) => (
                    <div
                      key={inventoryItem.id}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                      onClick={() => {
                        updateItem(index, {
                          ...item,
                          item: inventoryItem,
                          id: inventoryItem.id,
                          quantity: 1,
                        })
                        setShowItemDropdown(false)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          updateItem(index, {
                            ...item,
                            item: inventoryItem,
                            id: inventoryItem.id,
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
                  {item.item ? item.item.unit : 'Unit'}
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
