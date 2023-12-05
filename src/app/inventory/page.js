'use client'

import { useState } from 'react';

import { BodyTable, Inventory } from '@/components/pages/inventory'

export default function ShowInventory() {
  const [ selectedCategory, setSelectedCategory ] = useState(null);

  return (
    
    <Inventory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
      <BodyTable category={selectedCategory} />
    </Inventory>
  )
}
