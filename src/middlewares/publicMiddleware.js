import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const publicPages = [
  '/',
  '/auth/signin',
  '/auth/signup',
  '/need-verify',
  '/unverified',
  '/verified',
  '/verify-email',
  '/resend-activation',
  '/forget-password',
  '/forget-password-email-sent',
  '/reset-password',
]

const publicPathnameRegex = RegExp(`^/?(${publicPages.join('|')})?/?$`, 'i')

export async function publicMiddleware(req) {
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
