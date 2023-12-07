import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoAdd, IoChevronDownSharp, IoRemove, IoSaveSharp } from 'react-icons/io5'

import { NavBar } from '@/components/elements/navbar'
import { useGetInventory } from '@/hooks/inventory'
import { useGetOneOrder, useUpdateOrder } from '@/hooks/order'

dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

export function Update({ id }) {
  const router = useRouter()

  const { mutate: UpdateOrder } = useUpdateOrder()

  const { data } = useGetOneOrder(id)

  const [isShowItemDropdown, setShowItemDropdown] = useState(false)
  const [items, setItems] = useState(data?.items)
  const [selectedDate, setSelectedDate] = useState()

  useEffect(() => {
    setSelectedDate(new Date(data?.date))
    setItems(data?.items)
  }, [data])

  const { data: inventoryData } = useGetInventory()

  const InventoryData = inventoryData || []

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), quantity: 1, price: null, inventory: null },
    ])
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
    if (!item || !item.price || Number.isNaN(item.quantity)) {
      return 'Rp 0,00'
    }

    let total
    if (item.inventory && item.inventory.price) {
      total = item.inventory.price * item.quantity
    } else {
      total = item.price * item.quantity
    }

    return formatCurrency(total)
  }

  const updateQuantityAndRecalculate = (index, newQuantity) => {
    const newItem = { ...items[index], quantity: newQuantity }
    updateItem(index, newItem)
  }

  const getPrice = (item) => {
    if (item.inventory && item.inventory.price) {
      return `@Rp ${item.inventory.price}/${item.inventory.qtype || 'Unit'}`
    }
    if (item && item.price) {
      return `@Rp ${item.price}/Unit`
    }
    return ''
  }

  const calculateTotalPrice = () => {
    return items?.reduce((total, item) => {
      if (!item || Number.isNaN(item.quantity)) {
        return total
      }

      const itemPrice =
        item.inventory && item.inventory.price
          ? item.inventory.price * item.quantity
          : item.price * item.quantity

      return total + itemPrice
    }, 0)
  }

  function handleUpdateData() {
    const orderData = {
      id: data?._id,
      date: selectedDate ? new Date(selectedDate)?.toISOString() : new Date().toISOString(),
      items: items.map((item) => ({
        inventory: {
          inventoryId: item.inventory.id ? item.inventory.id : item.inventory._id,
          name: item.inventory.name,
        },
        inventoryId: item.inventory.id ? item.inventory.id : item.inventory._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: calculateTotalPrice(),
    }

    UpdateOrder({ id, data: orderData })

    router.push('/order')
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
          <div className="pb-6 pt-8 text-3xl font-bold text-black">Update Order</div>

          <div className="pb-2 font-bold text-black">Date</div>
          <div className="relative w-full pb-4">
            <DatePicker
              defaultValue={dayjs(data?.date?.split('T')[0] ?? '')}
              onChange={(_, e) => {
                setSelectedDate(e)
              }}
            />
          </div>

          <div className="pb-2 font-bold text-black">Items</div>
          <div className="flex flex-col gap-2 pb-4" style={{ width: '100%' }}>
            {items?.map((item, index) => (
              <div key={item.id} className="relative flex flex-row items-center gap-2">
                <button
                  type="button"
                  className="flex h-[66px] cursor-pointer flex-row items-center justify-between rounded bg-gray-200 px-4 py-4 text-black"
                  onClick={() => setShowItemDropdown(!isShowItemDropdown)}
                >
                  <div />
                  {item.inventory && (
                    <span className="text-left text-black">{item.inventory.name}</span>
                  )}
                  <IoChevronDownSharp className="ml-2 text-black" />
                </button>
                {isShowItemDropdown && (
                  <div className="absolute mt-1 w-full rounded border border-gray-300 bg-white">
                    {InventoryData.map((inventoryItem) => (
                      <div
                        key={inventoryItem._id}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => {
                          updateItem(index, {
                            ...items[index],
                            inventory: inventoryItem,
                            id: inventoryItem._id,
                            quantity: 1,
                            price: inventoryItem.price,
                          })
                          setShowItemDropdown(false)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            updateItem(index, {
                              ...items[index],
                              inventory: inventoryItem,
                              id: inventoryItem._id,
                              quantity: 1,
                              price: inventoryItem.price,
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
                  <span className="ml-2 font-medium text-black">{getPrice(item)}</span>
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
          onClick={handleUpdateData}
        >
          <IoSaveSharp className="mr-2" /> Save
        </button>
      </div>
    </div>
  )
}

export default Update
