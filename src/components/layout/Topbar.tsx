'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import AuthButton from '../AuthButton'
import NavBreadcumb from '../NavBreadcumb'
import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { Button } from '../ui/button'
import { restApi } from '../../../services/api'

interface TopBarProps {}

const TopBar: FunctionComponent<TopBarProps> = () => {
  const [hasCompanies, setHasCompanies] = useState(false)
  useEffect(() => {
    restApi.get('/user_companies').then((res) => {
      res.data.length > 0 ? setHasCompanies(true) : setHasCompanies(false)
    })
  }, [])

  return (
    <div className="px-10 py-4 bg-system-200 dark:bg-system-darkness shadow dark:shadow-black shadow-system-500 flex justify-between items-center z-50">
      <Link href={'/feed'}>
        <span className="flex justify-center items-center text-xl font-medium">
          <img
            src="/myLogo.png"
            alt=""
            className="w-16 h-16 invert dark:invert-0"
          />
          <h1 className="hidden md:block">TimeAlign</h1>
        </span>
      </Link>
      <div className="flex items-center gap-4">
        {hasCompanies && (
          <Link href={'/minhas-empresas'}>
            <Button variant={'ghost'}>
              <Building2 size={20} />
            </Button>
          </Link>
        )}

        <div className="hidden md:block">
          <NavBreadcumb />
        </div>
        <AuthButton />
      </div>
    </div>
  )
}

export default TopBar
