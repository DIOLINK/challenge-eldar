import { NextRequest, NextResponse } from 'next/server'
import { ROUTES } from './helpers'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token')?.value
  const url = new URL(req.url)

  if (!token && url.pathname === ROUTES.home) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }
  if (token && url.pathname === ROUTES.auth) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}
