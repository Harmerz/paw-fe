import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoSaveSharp } from 'react-icons/io5'

import { usePostRecipe } from '@/hooks/recipe'

export function Create() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')
  const router = useRouter()

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const { mutate: addRecipe } = usePostRecipe()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('ingredient', ingredient)
    formData.append('file', file)
    const jsonObject = Object.fromEntries(formData)
    try {
      await addRecipe(jsonObject)
      router.push('/recipe')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(addRecipe)

  return (
    <div className="relative flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
        <div className="text-md pb-6 pt-8 font-bold text-black md:text-xl lg:text-3xl">
          Create Recipe
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Name</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama masakan"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Description</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Deskripsi dari masakan"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Ingredients</div>
        <div className="pb-4">
          <input
            type="text"
            className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Bahan-bahan dari masakan (pisahkan dengan tanda koma)"
          />
        </div>

        <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Image</div>
        <div className="relative pb-4">
          <input type="file" className="file-input" onChange={loadImage} />
        </div>

        {preview ? (
          <figure className="image is-128x128">
            <Image src={preview} alt="Preview Image" />
          </figure>
        ) : (
          ''
        )}

        <div className="white relative w-1/6 flex-none">
          <button
            type="button"
            onClick={handleSubmit}
            className="bottom-0 right-0 mb-2 mr-2 flex cursor-pointer items-center justify-end space-x-2 rounded bg-ijo3 px-4 py-2 text-xs text-white md:text-sm lg:text-base"
          >
            <IoSaveSharp className="mr-2" /> Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Create
