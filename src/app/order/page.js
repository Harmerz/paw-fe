'use client'

import { useState } from 'react'

import { BodyTable, Order } from '@/components/pages/order'

export default function ShowOrder() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Order searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <BodyTable search={searchTerm} />
    </Order>
  )
}
