import Image from 'next/image'
import { useState } from 'react'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

export function OneRecipe() {
  const [data, setData] = useState([
    {
      img: 'https://th.bing.com/th/id/OIP.8kg0jQPbYYkcrYK9pJ1k8AAAAA?w=272&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      name: 'Telur Balado Pedas Cabe Hijau',
      description:
        'Telur Balado Pedas Cabe Hijau adalah hidangan lezat dan pedas yang terdiri dari telur rebus yang dimasak dengan bumbu balado khas Indonesia. Telur Balado Pedas Cabe Hijau sering dihidangkan sebagai lauk pendamping nasi putih hangat. Rasanya yang pedas dan sedikit manis membuat hidangan ini menjadi pilihan yang populer di berbagai acara makan, baik sehari-hari maupun pada kesempatan khusus.',
      ingredients: [
        '8 butir telur ayam yang direbus',
        '1 lembar daun salam pilihan',
        '1 batang serai yang telah dimemarkan',
        '1 buah tomat hijau dengan ukuran besar atau sekitar 50 gr, lalu dipotong-potong',
        '1 bungkus bumbu masak seperti Royco ayam',
        '¼ sendok teh garam',
        '1 sendok teh gula pasir',
        '1 sendok makan air asam Jawa, dari larutan ½ sdt asam Jawa dan 2 sdm air',
        '100 ml minyak goreng untuk menumis',
        '5 butir bawang merah tumbuk kasar',
        '10 buah cabai hijau besar atau berukuran kira-kira 150 gr tumbuk kasar',
        '5 buah cabai hijau keriting segar tumbuk kasar',
      ],
      steps: [
        'Tumis bawang merah, cabai hijau besar, cabai hijau keriting, serai, dan daun salam hingga tercium harum.',
        'Selanjutnya masukkan tomat hijau, lalu tumis hingga layu.',
        'Masukkan garam, telur, Royco ayam, dan gula pasir, lalu aduk hingga merata.',
        'Tambahkan air asam Jawa dan masaklah sampai meresap.',
        'Jika sudah meresap, Telur Balado Pedas Cabe Hijau siap dihidangkan.',
      ],
    },
  ])
  return (
    <div className="relative flex bg-white pt-8">
      <div className="w-1/6 flex-none" />
      <div className="mt-4 flex">
        <div className="mt-4 flex-col">
          {data.map((item, index) => (
            <div key={index} className="font-poppins my-2 p-4 text-base text-black">
              <Image src={item.img} alt={item.name} width={240} height={180} className="mb-4" />
              <h2 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">{item.name}</h2>
              <p className="text-sm lg:text-base">{item.description}</p>
              <h3 className="md:text-md mt-2 text-sm font-bold lg:text-lg ">Bahan-Bahan:</h3>
              <ul className="ml-8 list-disc text-left text-xs lg:text-base">
                {item.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="md:text-md mt-2 text-sm font-bold lg:text-lg">Langkah-Langkah:</h3>
              <ol className="ml-8 list-decimal text-left text-xs lg:text-base">
                {item.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
          <div className="relative bottom-0 right-0 mb-2 mr-2 flex items-center justify-end space-x-2">
            <button
              type="button"
              className="flex cursor-pointer items-center rounded bg-ijo3 px-4 py-2 text-xs text-white md:text-sm lg:text-base"
            >
              <IoColorWandSharp className="mr-2" /> Edit
            </button>
            <button
              type="button"
              className="flex cursor-pointer items-center rounded bg-merah-tumbas px-4 py-2 text-xs text-white md:text-sm lg:text-base"
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

export default OneRecipe
