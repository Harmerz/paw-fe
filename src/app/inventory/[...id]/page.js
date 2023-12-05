import { Update } from '@/components/pages/inventory'

export default function updateInventory({params}) {
  return <Update id={params.id} />
}

