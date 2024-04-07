'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveRouteProps = LinkProps & {
  children: React.ReactNode
}

export function ActiveRoute({ href, children, ...rest }: ActiveRouteProps) {
  const pathname = usePathname()
  const isActive = pathname === href.toString()

  return (
    <>
      <Link
        href={href}
        {...rest}
        className={` ${isActive ? 'dark:bg-white/10 hover:bg-black/10' : ''} dark:hover:bg-white/10 hover:bg-black/10 flex items-center gap-2  transition-all duration-300 px-4 py-2 rounded-md `}
      >
        {children}
      </Link>
    </>
  )
}
