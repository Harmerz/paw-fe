'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

import { useDeleteRecipe, useGetOneRecipe } from '@/hooks/recipe'

export function RecipeDetail({ params }) {
  const router = useRouter()
  console.log(params.id)
  const { data: recipeData, isLoading, refetch } = useGetOneRecipe(params.id)

  const { deleteRecipeMutation, mutate } = useDeleteRecipe()

  useEffect(() => {
    refetch()
  }, [params.id, refetch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const recipeDetail = recipeData || []
  console.log(recipeDetail)

  const handleDelete = async () => {
    try {
      await mutate(params.id)
      router.push('/recipe')
    } catch (error) {
      console.error('Error deleting recipe:', error)
    }
  }

  return (
    <div className="relative flex bg-white pt-8">
      <div className="w-1/6 flex-none" />
      <div className="mt-4 flex">
        <div className="mt-4 flex-col">
          <div key={recipeDetail.name} className="font-poppins my-2 p-4 text-base text-black">
            <Image
              src="/assets/nasgor.webp"
              alt={recipeDetail.name}
              width={240}
              height={180}
              className="mb-4"
            />
            <h2 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">{recipeDetail.name}</h2>
            <p className="text-sm lg:text-base">{recipeDetail.description}</p>
            <h3 className="md:text-md mt-2 text-sm font-bold lg:text-lg ">Bahan-Bahan:</h3>
            <ul className="ml-8 list-disc text-left text-xs lg:text-base">
              <li>{recipeDetail.ingredient}</li>
            </ul>
          </div>

          <div className="relative bottom-0 right-0 mb-2 mr-2 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={() => router.push(`/recipe/update`)}
              className="flex cursor-pointer items-center rounded bg-ijo3 px-4 py-2 text-xs text-white md:text-sm lg:text-base"
            >
              <IoColorWandSharp className="mr-2" /> Edit
            </button>
            <button
              type="button"
              className="flex cursor-pointer items-center rounded bg-merah-tumbas px-4 py-2 text-xs text-white md:text-sm lg:text-base"
              onClick={handleDelete}
            >
              <IoTrashBinSharp className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex-grow bg-white" />
    </div>
  )
}

export default RecipeDetail
