'use client'

import { useState } from 'react';

import { BodyTable, Inventory } from '@/components/pages/inventory'

export default function ShowInventory() {
  const [ selectedCategory, setSelectedCategory ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    
    <Inventory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <BodyTable category={selectedCategory} search={searchTerm}/>
    </Inventory>
  )
}
