import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { IoPersonCircle } from 'react-icons/io5'

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
  const pathname = usePathname()
  const [dropDown, setDropDown] = useState(false)
  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window?.scrollY : 0)
  const [top, setTop] = useState(pathname === '/')
  const ref = useRef(null)
  const [visible, setVisible] = useState(true)

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
  console.log(dropDown)
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
      <IoPersonCircle className="hidden h-10 w-10 text-xl text-black lg:flex" />
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
      </div>
    </nav>
  )
}

export default NavBar
