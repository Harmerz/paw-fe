import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMenuSharp, IoPersonCircleSharp } from 'react-icons/io5'

import TumbasLogo from '../../../../public/assets/page/tumbas_logo.svg'
import Order from '../../../app/order/page'
import { NavLink } from './NavLink'

export function NavBarLarge() {
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }

  const handleProfileClick = () => {
    // Navigate to profile
  }

  const isActive = (path) => path === router.pathname

  return (
    <div className="flex items-center justify-between p-6">
      <div
        className="cursor-pointer"
        onClick={handleLogoClick}
        onKeyDown={handleLogoClick}
        role="button"
        tabIndex={0}
      >
        <Image src={TumbasLogo} alt="Tumbas Logo" style={{ height: '42px' }} />
      </div>
      <div className="flex items-center gap-12">
        <NavLink path="/inventory" isActive={isActive}>
          Inventory
        </NavLink>
        <NavLink path="/recipe" isActive={isActive}>
          Recipe
        </NavLink>
        <NavLink path="/order" isActive={isActive}>
          Order
        </NavLink>
        <NavLink path="/delivery" isActive={isActive} element={<Order />}>
          Delivery
        </NavLink>
      </div>
      <div
        className="flex cursor-pointer items-center text-black"
        onClick={handleProfileClick}
        onKeyDown={handleProfileClick}
        role="button"
        tabIndex={0}
      >
        <IoPersonCircleSharp size={40} />
      </div>
    </div>
  )
}

export function NavBarSmall() {
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleProfileClick = () => {
    // Navigate to profile
  }

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => path === router.pathname

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex w-full flex-row items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={handleMenuClick}
          onKeyDown={handleMenuClick}
          tabIndex={0}
          role="button"
        >
          <IoMenuSharp size={30} className="text-ijo1" />
        </div>
        <div
          className="flex cursor-pointer items-center text-black"
          onClick={handleProfileClick}
          onKeyDown={handleProfileClick}
          role="button"
          tabIndex={0}
        >
          <IoPersonCircleSharp size={40} />
        </div>
      </div>
      <div className={`flex w-full justify-start gap-4 ${isMenuOpen ? 'flex-col' : 'hidden'}`}>
        <NavLink path="/inventory" isActive={isActive}>
          Inventory
        </NavLink>
        <NavLink path="/recipe" isActive={isActive}>
          Recipe
        </NavLink>
        <NavLink path="/order" isActive={isActive}>
          Order
        </NavLink>
        <NavLink path="/delivery" isActive={isActive} element={<Order />}>
          Delivery
        </NavLink>
      </div>
    </div>
  )
}

export function NavBar() {
  const [isLargeScreen, setIsLargeScreen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768)
    }

    // Initial check on mount
    handleResize()

    // Add event listener for resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isLargeScreen ? <NavBarLarge /> : <NavBarSmall />
}

export default NavBar
