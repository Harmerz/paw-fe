import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IoSaveSharp } from 'react-icons/io5'

import { usePutRecipe } from '@/hooks/recipe'

export default function Modal({ data, show, onClose, children }) {
  const [modalNode, setModalNode] = useState(null)
  const [name, setName] = useState(data.name)
  const [description, setDescription] = useState(data.description)
  const [ingredient, setIngredient] = useState(data.ingredient)
  const [instruction, setInstruction] = useState(data.instruction)
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')
  const router = useRouter()

  useEffect(() => {
    const modalRoot = document.createElement('div')
    document.body.appendChild(modalRoot)
    setModalNode(modalRoot)

    return () => {
      document.body.removeChild(modalRoot)
    }
  }, [])

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const { mutate: editRecipe } = usePutRecipe(data._id)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('ingredient', ingredient)
    formData.append('instruction', instruction)
    formData.append('file', file)
    const jsonObject = Object.fromEntries(formData)
    try {
      await editRecipe(jsonObject)
      router.push(`/recipe/${data._id}`)
      e.preventDefault()
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  console.log(editRecipe)

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 bg-center">
      <div className="h-600 z-10 w-3/4 rounded-lg bg-white p-4">
        <div className="flex justify-end text-base">
          <button type="button" onClick={handleClose} className="text-ijo2">
            Close
          </button>
        </div>
        <div>
          {children}
          <div className="flex-grow bg-white">
            <div className="text-md pb-6 pt-8 font-bold text-black md:text-xl lg:text-3xl">
              Update Recipe
            </div>
            <div>
              <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Name</div>
              <div className="pb-4">
                <input
                  type="text"
                  className="h-[22px] w-3/4 rounded-md bg-gray-200 p-3 text-xs text-black md:h-[44px] md:text-sm lg:h-[66px] lg:text-base"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama masakan"
                />
              </div>

              <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Description</div>
              <div className="pb-4">
                <input
                  type="text"
                  className="h-[22px] w-3/4 rounded-md bg-gray-200 p-3 text-xs text-black md:h-[44px] md:text-sm lg:h-[66px] lg:text-base"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi dari masakan"
                />
              </div>

              <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Ingredients</div>
              <div className="pb-4">
                <input
                  type="text"
                  className="h-[22px] w-3/4 rounded-md bg-gray-200 p-3 text-xs text-black md:h-[44px] md:text-sm lg:h-[66px] lg:text-base"
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                  placeholder="Bahan-bahan dari masakan (pisahkan dengan tanda koma)"
                />
              </div>

              <div className="md:text-md mt-2 text-sm font-bold lg:text-lg">Instruction</div>
              <div className="pb-4">
                <input
                  type="text"
                  className="h-[22px] w-3/4 rounded-md bg-gray-200 p-3 text-xs text-black md:h-[44px] md:text-sm lg:h-[66px] lg:text-base"
                  value={instruction}
                  onChange={(e) => setInstruction(e.target.value)}
                  placeholder="Langkah-langkah dalam memasak (pisahkan dengan tanda titik)"
                />
              </div>

              <div className="white relative w-1/6 flex-none">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bottom-0 right-0 mb-2 mr-2 flex cursor-pointer items-center justify-end space-x-2 rounded bg-ijo3 px-4 py-2 text-xs text-white md:text-sm lg:text-base"
                >
                  <IoSaveSharp className="mr-2" /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null

  return modalNode && show ? createPortal(modalContent, modalNode) : null
}
