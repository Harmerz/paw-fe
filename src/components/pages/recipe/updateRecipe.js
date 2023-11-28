import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoSaveSharp } from 'react-icons/io5'

import { useGetOneRecipe, usePutRecipe } from '@/hooks/recipe'

export function Update({ recipeData }) {
  const router = useRouter()
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')
  const { id } = router.query
  const recipeDetail = recipeData || []

  const [formData, setFormData] = useState({
    name: recipeDetail.name,
    description: recipeDetail.description,
    ingredient: recipeDetail.ingredient,
    instruction: recipeDetail.instruction,
  })

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const { mutate: editRecipe } = usePutRecipe()
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await editRecipe(id, formData)
      router.push(`/recipe/${recipeDetail._id}`)
    } catch (error) {
      console.error('Error updating recipe:', error)
    }
  }

  console.log(editRecipe)

  return (
    <div className="relative flex min-h-screen bg-white">
      <div className="w-1/6 flex-none" />

      <div className="w-2/3 flex-grow bg-white">
        <div className="text-md pb-6 pt-8 font-bold text-black md:text-xl lg:text-3xl">
          Update Recipe
        </div>
        <div onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
              value={formData.ingredient}
              onChange={handleChange}
              placeholder="Bahan-bahan dari masakan (pisahkan dengan tanda koma)"
            />
          </div>

          <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Instruction</div>
          <div className="pb-4">
            <input
              type="text"
              className="h-[22px]  w-3/4 
            rounded-md bg-gray-200 
            p-3 text-xs
            text-black
            md:h-[44px] md:text-sm
            lg:h-[66px] lg:text-base"
              value={formData.instruction}
              onChange={handleChange}
              placeholder="Langkah-langkah dalam memasak (pisahkan dengan tanda titik)"
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
              type="submit"
              className="bottom-0 right-0 mb-2 mr-2 flex cursor-pointer items-center justify-end space-x-2 rounded bg-ijo3 px-4 py-2 text-xs text-white md:text-sm lg:text-base"
            >
              <IoSaveSharp className="mr-2" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  try {
    // Di sini Anda dapat menambahkan logika untuk menghubungkan dan mengambil resep dari MongoDB
    const { mutate: recipe } = useGetOneRecipe(id)
    // const recipe = await useGetOneRecipe(id) // Fungsi untuk mendapatkan resep dari MongoDB berdasarkan ID

    // Mengembalikan data resep sebagai properti untuk komponen halaman
    return {
      props: {
        recipe,
      },
    }
  } catch (error) {
    console.error('Error fetching recipe:', error)
    // Jika terjadi kesalahan, mengembalikan properti resep kosong untuk menghindari kesalahan saat render
    return {
      props: {
        recipe: {},
      },
    }
  }
}

export default Update
