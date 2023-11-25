'use client'

import Image from 'next/image'

import { useGetRecipe, usePostRecipe } from '@/hooks/recipe'

export function AllRecipe() {
  const { data: recipeData, isLoading } = useGetRecipe()
  const { mutate: addRecipe } = usePostRecipe()
  function handleClick() {
    addRecipe()
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(recipeData)

  const recipeCard = recipeData || []

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-start">
        <div className="mb-8 ml-auto">
          <button
            onClick={handleClick}
            type="button"
            href="recipe/create"
            className="font-poppins 
            cursor-pointer 
            rounded 
            bg-ijo1 
            px-4 
            py-2 
            text-xs 
            text-white
            md:text-base
            lg:text-xl"
          >
            + Add Recipe
          </button>
        </div>
        <div className="mt-4 flex">
          <div className="mt-4 flex-col">
            {recipeCard.map((data) => (
              <div key={data.name} className="font-poppins my-2 p-4 text-base text-black md:flex">
                <Image
                  src={data.name}
                  alt={data.name}
                  width={200}
                  height={150}
                  className="mb-4 sm:mb-0 sm:mr-4 sm:flex-none"
                  style={{
                    height: '100%', // Set the image width to 100% on small screens
                    maxHeight: '150px', // Set a maximum width for the image on larger screens
                  }}
                />
                <div>
                  <h2 className="mb-2 text-xl font-bold">
                    <a href="link" className="duration-150 hover:text-green-700 hover:underline">
                      {data.name}
                    </a>
                  </h2>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllRecipe
