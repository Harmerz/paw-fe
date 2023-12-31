import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const adminPages = [
  '/inventory/create',
  '/recipe/create',
  '/order/create',
  '/delivery/create',
  '/delivery/[id]',
  '/order/[id]',
  '/inventory/[id]',
]

const adminPathNameRegex = RegExp(
  `^/?(${adminPages.map((page) => page.replace(/\[.*?\]/, '[^/]+')).join('|')})/?$`,
  'i',
)

export async function adminMiddleware(req) {
  // Check if the user is authenticated and has an admin role
  const isAdminPage = adminPathNameRegex.test(req.nextUrl.pathname)
  const token = await getToken({ req })

  if (isAdminPage) {
    if (token?.role === 'admin') {
      return NextResponse.next()
    }
    // If the user isn't an admin, return to inventory
    const url = new URL('/inventory', req.url)
    return NextResponse.redirect(url)
  }

  return undefined
}

export default adminMiddleware
