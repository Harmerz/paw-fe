'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5';

import {
  useDeleteInvetory,
  useGetInventory,
} from '@/hooks/inventory';

export function BodyTable({category, search}) {
  const { data: inventoryData, isLoading, refetch } = useGetInventory();
  const { mutate: InventoryDelete, isError } = useDeleteInvetory();
  const [tableData, setTableData] = useState(inventoryData ?? []);
  // const { mutate: PostInventory } = usePostInventory();
  console.log(inventoryData)
  console.log(tableData, category)

  useEffect(()=>{
let filteredData = inventoryData;

if (category) {
  filteredData = filteredData.filter((e) => e.type === category?.toLowerCase());
}

if (search) {
  const regex = new RegExp(search, 'i');
  console.log(regex.test("Salmonela"))
  filteredData = filteredData.filter((e) => regex.test(e.name));
}

setTableData(filteredData);
}, [inventoryData, category, search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }


  function handleDelete(id) {
    console.log('delete', id);
    InventoryDelete(id);
    refetch()
  }
  
    // PostInventory({
    //   desc: 'Ikan yang ada di promosi KFC Malaysia',
    //   name: 'Ikan Bilis',
    //   price: 2.2,
    //   qtype: 'kg',
    //   quantity: 98,
    //   type: 'fish',
    // });
  

  return (
    <tbody>
      {tableData?.map((data, index) => (
        <tr key={data.id} className="font-bold text-black">
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{index + 1}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data.name}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data.desc}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data.price}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data.quantity}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data.qtype}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">{data.type}</td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">
            <Link href={`/inventory/${data._id}`} passHref>
              <button
                type="button"
                className="flex cursor-pointer items-center rounded bg-ijo3 px-2 py-1 text-white sm:px-4 sm:py-2 mb-2 sm:mb-0"
                >
                <IoColorWandSharp className="mr-2" /> Edit
              </button>
            </Link>
          </td>
          <td className="py-2 pl-3 sm:py-4 sm:pl-4">
            <button
              onClick={() => handleDelete(data._id)}
              type="button"
              className="flex cursor-pointer items-center rounded bg-merah-tumbas px-2 py-1 text-white sm:px-4 sm:py-2"
            >
              <IoTrashBinSharp className="mr-2" /> Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default BodyTable;
