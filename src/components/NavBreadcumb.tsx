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
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname.map((path, index) => (
          <div key={path}>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path}`}>
                {path.charAt(0).toUpperCase() +
                  path.slice(1).replace(/-/g, ' ')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== pathname.length - 1 && path !== '' && (
              <BreadcrumbSeparator />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default NavBreadcumb
