import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const adminPages = ['/inventory/create', '/recipe/create']

const adminPathNameRegex = RegExp(`^/?(${adminPages.join('|')})?/?$`, 'i')

export async function adminMiddleware(req) {
  const isAdminPage = adminPathNameRegex.test(req.nextUrl.pathname)
  const token = await getToken({ req })

  if (isAdminPage) {
    if (token.role === 'admin') {
      return NextResponse.next()
    }
    // If user isn't an admin, redirect to homepage
    return NextResponse.json("You don't have an permission", { status: 500 })
  }

  return undefined
}

export default adminMiddleware
