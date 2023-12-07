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
  const isAdminPage = adminPathNameRegex.test(req.nextUrl.pathname)
  const token = await getToken({ req })

  if (isAdminPage) {
    if (token?.role === 'admin') {
      return NextResponse.next()
    }
    // If the user isn't an admin, return an error response
    return NextResponse.json(
      { error: "You don't have permission to access this resource" },
      { status: 403 },
    )
  }

  return undefined
}

export default adminMiddleware
