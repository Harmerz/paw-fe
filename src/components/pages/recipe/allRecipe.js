'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { LuLoader } from 'react-icons/lu'

import { NavBar } from '@/components/elements/navbar'
import { useGetRecipe } from '@/hooks/recipe'

export function AllRecipe() {
  const { data: recipeData, isLoading } = useGetRecipe()
  const { data: session } = useSession()

  const recipeCard = recipeData || []

  return (
    <div className="min-h-screen w-full bg-white p-8">
      <NavBar />
      <div className="flex flex-col items-center">
        {session?.user?.role === 'admin' && (
          <div className="mb-8 ml-auto">
            <Link href="/recipe/create">
              <button
                type="button"
                className="font-poppins 
              cursor-pointer 
              rounded 
              bg-ijo1 
              px-4 
              py-2 
              text-xs 
              text-white
              md:text-base
              lg:text-base"
              >
                + Add Recipe
              </button>
            </Link>
          </div>
        )}
        <div className="mt-4 flex">
          {isLoading ? (
            <div className="flex h-full w-full items-center justify-center">
              <LuLoader className=" h-10 w-10 animate-spin text-black" />
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {recipeCard.map((data) => (
                <Link key={data._id} href={`/recipe/${data._id}`} className="h-full w-full">
                  <div className="font-poppins group h-full cursor-pointer rounded-lg border p-4 text-base text-black shadow-lg hover:bg-slate-100 md:flex">
                    <Image
                      src={data.imgUrl}
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
                        <div className="duration-150 group-hover:text-green-700 group-hover:underline">
                          {data.name}
                        </div>
                      </h2>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllRecipe
