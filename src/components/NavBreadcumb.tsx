'use client'

import { FunctionComponent } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'

interface NavBreadcumbProps {}

const NavBreadcumb: FunctionComponent<NavBreadcumbProps> = () => {
  const pathname = usePathname().split('/')
  console.log(pathname)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname.map((path, index) => (
          <>
            <BreadcrumbItem key={path}>
              <BreadcrumbLink href={`/${path}`}>
                {path.charAt(0).toUpperCase() +
                  path.slice(1).replace(/-/g, ' ')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== pathname.length - 1 && path !== '' && (
              <BreadcrumbSeparator />
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default NavBreadcumb
