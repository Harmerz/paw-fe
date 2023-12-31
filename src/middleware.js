import { NextResponse } from 'next/server'

import { adminMiddleware, authMiddleware, publicMiddleware } from './middlewares'

export default async function middleware(req) {
  // Check if public routes
  const resPub = await publicMiddleware(req)
  if (resPub) return resPub

  // Check if user still login
  const resAuth = await authMiddleware(req)
  if (!resAuth.ok) return resAuth

  // Check if routes is for admin role
  const admin = await adminMiddleware(req)
  if (admin) return admin

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next|.*\\..*).*)',
    // '/((?!api|auth|_next/static|_next/image|favicon.ico|.+\\.svg).*)',
  ],
}
