import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('nextauth.token')?.value
  const pathname = request.nextUrl.pathname
  const tokenpass = request.nextUrl.searchParams.get('token')

  const companyHomeURL = new URL(`/${pathname.split('/')[1]}`, request.url)
  const searchCompanyURL = new URL('/testando/home', request.url)

  if (pathname.includes('/login') && token) {
    return NextResponse.redirect(searchCompanyURL)
  }

  if (pathname.includes('/minhaconta') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname.includes('/nova-senha') && !tokenpass) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (
    !token &&
    (pathname.includes('/agendar') ||
      pathname.includes('/historico') ||
      pathname.includes('/carteira'))
  ) {
    return NextResponse.redirect(companyHomeURL)
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
