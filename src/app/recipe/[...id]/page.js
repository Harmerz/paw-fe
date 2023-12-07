'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

import { NavBar } from '@/components/elements/navbar'
import Modal from '@/components/pages/recipe/modal'
import { useDeleteRecipe, useGetOneRecipe } from '@/hooks/recipe'

export function RecipeDetail({ params }) {
  const router = useRouter()
  const { data: recipeData, isLoading, refetch } = useGetOneRecipe(params.id)

  const [showModal, setShowModal] = useState(false)
  const { mutate } = useDeleteRecipe()

  useEffect(() => {
    refetch()
  }, [params.id, refetch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const recipeDetail = recipeData || []

  const handleDelete = () => {
    try {
      mutate(params.id)
      router.push('/recipe')
    } catch (error) {
      console.error('Error deleting recipe:', error)
    }
  }

  const ingrArray = () => {
    if (recipeDetail.ingredient && recipeDetail.ingredient.length > 0) {
      const elements = recipeDetail.ingredient[0].split(',') // Memisahkan string menjadi array dengan satu elemen
      const finalArray = elements.flatMap((item) =>
        item.split(',').map((innerItem) => innerItem.trim()),
      ) // Memisahkan setiap elemen menjadi array yang terpisah

      return finalArray
    }
    return []
  }

  const insArray = () => {
    if (recipeDetail.instruction && recipeDetail.instruction.length > 0) {
      const elements = recipeDetail.instruction[0].split('.') // Memisahkan string menjadi array dengan satu elemen
      const finalArray = elements.flatMap((item) =>
        item.split('.').map((innerItem) => innerItem.trim()),
      ) // Memisahkan setiap elemen menjadi array yang terpisah

      return finalArray
    }
    return []
  }

  return (
    <div className="bg-white">
      <NavBar />
      <div className="relative flex pt-8">
        <div className="w-1/6 flex-none" />
        <div className="mt-4 flex">
          <div className="mt-4 flex-col">
            <div key={recipeDetail.name} className="font-poppins my-2 p-4 text-base text-black">
              <Image
                src={recipeDetail.imgUrl}
                alt={recipeDetail.name}
                width={240}
                height={180}
                className="mb-4"
              />
              <h2 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">{recipeDetail.name}</h2>
              <p className="text-sm lg:text-base">{recipeDetail.description}</p>
              <h3 className="md:text-md mt-2 text-sm font-bold lg:text-lg ">Bahan-Bahan:</h3>
              <ul className="ml-8 list-disc text-left text-xs lg:text-base">
                {ingrArray().map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="md:text-md mt-2 text-sm font-bold lg:text-lg ">Langkah-Langkah:</h3>
              <ul className="ml-8 list-decimal text-left text-xs lg:text-base">
                {insArray().map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
            </div>
            <div className="relative bottom-0 right-0 mb-2 mr-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowModal(true)}
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
              <Modal data={recipeDetail} show={showModal} onClose={() => setShowModal(false)} />
            </div>
          </div>
        </div>
        <div className="w-2/3 flex-grow bg-white" />
      </div>
    </div>
  )
}

export default RecipeDetail
