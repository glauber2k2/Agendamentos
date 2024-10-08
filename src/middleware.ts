import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('nextauth.token')?.value
  const pathname = request.nextUrl.pathname
  const tokenpass = request.nextUrl.searchParams.get('token')

  const companyHomeURL = new URL(`/${pathname.split('/')[1]}`, request.url)
  const searchCompanyURL = new URL('/feed', request.url)

  if (pathname.includes('/login') && token) {
    return NextResponse.redirect(searchCompanyURL)
  }

  if (pathname.includes('/minha-conta') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname.includes('/nova-senha') && !tokenpass) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (
    !token &&
    (pathname.includes('/agendar') ||
      pathname.includes('/historico') ||
      pathname.includes('/minhas-empresas') ||
      pathname.includes('/carteira'))
  ) {
    return NextResponse.redirect(companyHomeURL)
  }
}
