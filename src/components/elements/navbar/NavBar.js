import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoPersonCircleSharp } from 'react-icons/io5'

import TumbasLogo from '../../../../public/assets/page/tumbas_logo.svg'
import Order from '../../../app/order/page'
import { NavLink } from './NavLink'

export function NavBar() {
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

export default NavBar
