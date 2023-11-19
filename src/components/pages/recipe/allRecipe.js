import Image from 'next/image'
import { useState } from 'react'

export function AllRecipe() {
  const [data, setData] = useState([
    {
      img: 'https://th.bing.com/th/id/OIP.8kg0jQPbYYkcrYK9pJ1k8AAAAA?w=272&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      name: 'Telur Balado Pedas Cabe Hijau',
      description:
        'Telur Balado Pedas Cabe Hijau adalah hidangan lezat dan pedas yang terdiri dari telur rebus yang dimasak dengan bumbu balado khas Indonesia. Telur Balado Pedas Cabe Hijau sering dihidangkan sebagai lauk pendamping nasi putih hangat. Rasanya yang pedas dan sedikit manis membuat hidangan ini menjadi pilihan yang populer di berbagai acara makan, baik sehari-hari maupun pada kesempatan khusus.',
    },
    {
      img: 'https://live.staticflickr.com/5163/5330506374_1ea38e8783_b.jpg',
      name: 'Nasi Goreng Special',
      description:
        'Nasi Goreng Special adalah hidangan nasi yang digoreng dengan bumbu-bumbu khusus dan dicampur dengan daging ayam, udang, dan sayuran. Rasanya yang gurih dan sedikit pedas membuat nasi goreng ini menjadi favorit banyak orang.',
    },
  ])

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-start">
        <div className="mb-8 ml-auto">
          <button
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
            {data.map((item, index) => (
              <div key={index} className="font-poppins my-2 p-4 text-base text-black md:flex">
                <Image
                  src={item.img}
                  alt={item.name}
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
                    <a
                      href={`#link-to-${index}`}
                      className="duration-150 hover:text-green-700 hover:underline"
                    >
                      {item.name}
                    </a>
                  </h2>
                  <p>{item.description}</p>
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
