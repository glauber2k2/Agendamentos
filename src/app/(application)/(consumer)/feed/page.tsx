'use client'
import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '../../../../services/api'
import Link from 'next/link'
import Divider from '@/components/Divider'

interface Company {
  id: string
  name: string
  description: string
  identifier: string
}

interface FeedProps {}

const Feed: FunctionComponent<FeedProps> = () => {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    restApi
      .get('/companies?visibleCompanies=true')
      .then((res) => setCompanies(res.data.responseData))
  }, [])

  return (
    <div className="flex flex-col w-full justify-center gap-4 p-10 md:flex-row">
      <div className="flex w-full md:w-72 h-96 bg-neutral-900 justify-center items-center">
        Filtro
      </div>
      <div className="flex flex-col  gap-4">
        {companies.map((company) => (
          <Link href={`/${company.identifier}`} key={company.id}>
            <div className="dark:bg-neutral-900/50 bg-neutral-200 flex rounded-md hover:opacity-90 transition-all duration-300 overflow-hidden">
              <div className="w-52 h-52 bg-violet-500 " />
              <div className="flex p-4 flex-col flex-1 lg:w-[500px]">
                {company.name}
                <p className="text-xs">{company.description}</p>
                <Divider className="my-4" />
                <p className="px-2 py-1 rounded bg-neutral-500/20 w-fit text-xs font-medium">
                  Barbearia
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Feed
