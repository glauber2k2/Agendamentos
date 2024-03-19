import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('nextauth.token')?.value
  const pathname = request.nextUrl.pathname

  const signInURL = new URL('/login', request.url)
  const companyHomeURL = new URL(`/${pathname.split('/')[1]}/home`, request.url)
  const searchCompanyURL = new URL('/teste/home', request.url)

  if (pathname.includes('/login') && token) {
    return NextResponse.redirect(searchCompanyURL)
  }

  if (
    !token &&
    (pathname.includes('/agendar') ||
      pathname.includes('/historico') ||
      pathname.includes('/historico'))
  ) {
    return NextResponse.redirect(companyHomeURL)
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
