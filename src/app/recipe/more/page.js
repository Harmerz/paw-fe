'use client'

import Image from 'next/image'
import { IoColorWandSharp, IoTrashBinSharp } from 'react-icons/io5'

export default function More() {
  return (
    <div className="relative flex bg-white pt-8">
      <div className="w-1/6 flex-none" />
      <div>
        <Image
          src="https://th.bing.com/th/id/OIP.8kg0jQPbYYkcrYK9pJ1k8AAAAA?w=272&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Telur Balado Pedas"
          width={200}
          height={150}
          className="mb-4"
        />
        <div>
          <h1 className="mt-2 text-xl font-bold">Telur Balado Pedas Cabe Hijau</h1>
          <p className="description">
            Telur Balado Pedas Cabe Hijau adalah hidangan lezat dan pedas yang terdiri dari telur
            rebus yang dimasak dengan bumbu balado khas Indonesia. Telur Balado Pedas Cabe Hijau
            sering dihidangkan sebagai lauk pendamping nasi putih hangat. Rasanya yang pedas dan
            sedikit manis membuat hidangan ini menjadi pilihan yang populer di berbagai acara makan,
            baik sehari-hari maupun pada kesempatan khusus.
          </p>
        </div>
        <div>
          <br />
          <h1 className="mt-2 text-xl font-bold">Bahan-Bahan</h1>
          <ul className="ml-8 mr-24 list-disc text-left">
            <li>8 butir telur ayam yang direbus</li>
            <li>1 lembar daun salam pilihan</li>
            <li>1 batang serai yang telah dimemarkan</li>
            <li>1 buah tomat hijau dengan ukuran besar atau sekitar 50 gr, lalu dipotong-potong</li>
            <li>1 bungkus bumbu masak seperti Royco ayam</li>
            <li>¼ sendok teh garam</li>
            <li>1 sendok teh gula pasir</li>
            <li>1 sendok makan air asam Jawa, dari larutan ½ sdt asam Jawa dan 2 sdm air</li>
            <li>100 ml minyak goreng untuk menumis</li>
          </ul>
          <p className="mt-2">Bahan-bahan yang ditumbuk kasar</p>
          <ul className="ml-8 mr-24 list-disc text-left">
            <li>5 butir bawang merah</li>
            <li>10 buah cabai hijau besar atau berukuran kira-kira 150 gr</li>
            <li>5 buah cabai hijau keriting segar</li>
          </ul>
        </div>
        <div>
          <br />
          <h1 className="mt-2 text-xl font-bold">Langkah-Langkah</h1>
          <ul className="ml-8 mr-24 list-disc text-left">
            <li>Tumis bumbu yang ditumbuk kasar, serai, dan daun salam hingga tercium harum.</li>
            <li>Selanjutnya masukan tomat hijau, lalu tumis hingga layu.</li>
            <li>Masukkan garam, telur, Royco ayam, dan gula pasir, lalu aduk hingga merata.</li>
            <li>Tambahkan air asam Jawa dan masaklah sampai meresap.</li>
            <li>Jika sudah meresap, Telur Balado Pedas Cabe Hijau siap dihidangkan.</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center justify-end space-x-2">
        <button
          type="button"
          className="bg-ijo3 flex cursor-pointer items-center rounded px-4 py-2 text-white"
        >
          <IoColorWandSharp className="mr-2" /> Edit
        </button>
        <button
          type="button"
          className="bg-merah-tumbas flex cursor-pointer items-center rounded px-4 py-2 text-white"
        >
          <IoTrashBinSharp className="mr-2" /> Delete
        </button>
      </div>
      <div className="w-2/3 flex-grow bg-white" />
    </div>
  )
}
