import { BodyTable, Inventory } from '@/components/pages/inventory'
import { usePostInventory } from '@/hooks/inventory'

export default function ShowInventory() {
  return (
    <Inventory>
      <BodyTable />
    </Inventory>
  )
}
