import { AllRecipe } from '@/components/pages/recipe'
import { SessionProvider } from 'next-auth/react'

export default function ShowRecipe() {
  return (
    <SessionProvider>
      <AllRecipe />
    </SessionProvider>
  )
}
