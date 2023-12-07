import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import { IoLogOutOutline, IoPersonCircle } from 'react-icons/io5'

import { axios } from '@/lib/axios'

function Icon({ active, top }) {
  return (
    <div
      className={`toggle__container ${active ? 'active' : ''} ${
        top
          ? '[&>*]:bg-white [&>*]:[transition:background-color_300ms_0ms]'
          : '[&>*]:bg-black [&>*]:[transition:background-color_500ms_500ms]'
      }`}
    >
      <div className={`toggle ${active ? 'no-animation active' : ''} toggle__one `} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__two `} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__three `} />
    </div>
  )
}

export function NavBar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [dropDown, setDropDown] = useState(false)
  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window?.scrollY : 0)
  const [top, setTop] = useState(pathname === '/')
  const ref = useRef(null)
  const [visible, setVisible] = useState(true)
  const [logout, setLogout] = useState(false)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!ref?.current?.contains(e.target)) setDropDown(false)
    })
  })
  useEffect(() => {
    setTop(yOffset < 100 && pathname === '/' && !dropDown)
  }, [dropDown, pathname, yOffset])
  function handleScroll() {
    const currentYOffset = window.scrollY
    const naik = yOffset >= currentYOffset || currentYOffset < 100

    setYOffset(currentYOffset)
    setVisible(naik)
    setDropDown(dropDown && visible)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const route = [
    {
      name: 'Order',
      path: '/order',
    },
    {
      name: 'Inventory',
      path: '/inventory',
    },
    {
      name: 'Delivery',
      path: '/delivery',
    },
    {
      name: 'Recipe',
      path: '/recipe',
    },
  ]
  async function HandleLogout(refreshToken) {
    signOut()
    await axios.delete('/auth/logout', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
  }
  return (
    <nav className="relative flex h-full w-full flex-row justify-between border-b lg:px-10 lg:py-5">
      <Link href="/">
        <Image src="/assets/page/tumbas_logo.svg" width={140} height={42} alt="Logo" />
      </Link>
      <div className="hidden flex-row gap-8 lg:flex">
        {route.map((item) => (
          <Link
            className={`font-poppins flex flex-col items-center justify-center text-sm font-bold lg:text-xl  ${
              pathname === item.path ? 'text-ijo1' : 'text-black hover:text-ijo3'
            }`}
            key={item.path}
            href={item.path}
          >
            {item.name}
            {pathname === item.path && <div className="h-[3px] w-5 rounded-full bg-ijo1" />}{' '}
          </Link>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setLogout(!logout)}
        className="relative flex flex-row items-center gap-3 text-black"
      >
        <IoPersonCircle className="hidden h-10 w-10 text-xl text-black lg:flex" />{' '}
        {session?.user?.name}
        {logout && (
          <div className="absolute top-[100%] bg-white px-4 py-3 hover:bg-slate-200">
            <button
              key="Logout"
              type="button"
              onClick={() => HandleLogout(session?.user?.refreshToken)}
              className=" flex w-[90px] flex-row items-center gap-2 text-red-600 hover:text-red-500"
            >
              <IoLogOutOutline className="h-5 w-5 text-xl" /> Log Out
            </button>
          </div>
        )}
      </button>
      <button
        ref={ref}
        type="button"
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none lg:hidden "
        onClick={() => setDropDown(!dropDown)}
      >
        <Icon active={dropDown} top={top} />
      </button>
      <div
        className={`absolute top-[100%] flex w-full flex-col items-center justify-center gap-4 bg-white ${
          dropDown ? '' : 'hidden'
        }`}
      >
        <div className="w-full">
          <IoPersonCircle className="hidden h-10 w-10 text-xl text-black lg:flex" />{' '}
          {session?.user?.name}
        </div>
        {route.map((item) => (
          <Link
            className={`font-poppins flex w-full flex-col items-center justify-center text-sm font-bold lg:text-xl  ${
              pathname === item.path ? 'text-ijo1' : 'text-black hover:text-ijo3'
            }`}
            key={item.path}
            href={item.path}
          >
            {item.name}
            {pathname === item.path && <div className="h-[3px] w-5 rounded-full bg-ijo1" />}{' '}
          </Link>
        ))}
        <button
          key="Logout"
          type="button"
          onClick={() => HandleLogout(session?.user?.refreshToken)}
          className=" flex w-[90px] flex-row items-center gap-2 text-red-600 hover:text-red-500"
        >
          <IoLogOutOutline className="h-5 w-5 text-xl" /> Log Out
        </button>
      </div>
    </nav>
  )
}

export default NavBar
