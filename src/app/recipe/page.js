'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Recipe() {
  const [showMore, setShowMore] = useState(false)
  const toggleDescription = () => {
    setShowMore(!showMore)
  }

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-start">
        <div className="mb-12 ml-auto">
          <button
            type="button"
            className="btn-holder font-poppins cursor-pointer rounded bg-green-700 px-4 py-2 text-base text-white sm:text-lg lg:text-xl"
          >
            +Add Recipe
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://th.bing.com/th/id/OIP.8kg0jQPbYYkcrYK9pJ1k8AAAAA?w=272&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Telur Balado Pedas"
            width={200}
            height={150}
            className="px-2"
          />
          <div>
            <a href="recipe/more" className="font-poppins text-xl">
              Telur Balado Pedas Cabe Hijau
            </a>
            <p className="description">
              Telur Balado Pedas Cabe Hijau adalah hidangan lezat dan pedas yang terdiri dari telur
              rebus yang dimasak dengan bumbu balado khas Indonesia.
              {showMore ? (
                <>
                  Telur Balado Pedas Cabe Hijau sering dihidangkan sebagai lauk pendamping nasi
                  putih hangat. Rasanya yang pedas dan sedikit manis membuat hidangan ini menjadi
                  pilihan yang populer di berbagai acara makan, baik sehari-hari maupun pada
                  kesempatan khusus.
                  <button type="button" onClick={toggleDescription} id="myBtn">
                    Read less
                  </button>
                </>
              ) : (
                <span>
                  <span id="dots">...</span>
                  <button type="button" onClick={toggleDescription} id="myBtn">
                    Read more
                  </button>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
