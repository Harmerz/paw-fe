import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const publicPages = ['/', '/auth/signin', '/auth/signup']

const publicPathnameRegex = RegExp(`^/?(${publicPages.join('|')})?/?$`, 'i')

export async function publicMiddleware(req) {
  // Is user on a public routes
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)
  const token = await getToken({ req })

  if (isPublicPage) {
    if (token) {
      const url = new URL('/inventory', req.url)
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  return undefined
}

export default publicMiddleware
