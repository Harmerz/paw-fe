import Link from 'next/link'

export function NavLink({ path, children, isActive }) {
  const linkStyle = `
    text-lg
    font-medium
    relative
    inline-block
    ${isActive(path) ? 'text-green-600' : 'text-gray-700'}
    cursor-pointer
    font-poppins
    pb-2
  `

  const indicatorStyle = `
    absolute
    bottom-0
    left-0
    bg-green-600
    h-1
    rounded-md
    ${isActive(path) ? 'w-full' : 'w-0'}
    transition-width
  `

  return (
    <Link href={path} className={linkStyle}>
      {children}
      <div className={indicatorStyle} />
    </Link>
  )
}

export default NavLink
