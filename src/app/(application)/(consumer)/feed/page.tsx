'use client'
import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '../../../../services/api'
import Link from 'next/link'

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
      <div className="flex w-full md:w-72 h-96 bg-system-darkness justify-center items-center">
        Filtro
      </div>
      <div className="flex flex-col  gap-4">
        {companies.map((company) => (
          <Link href={`/${company.identifier}`} key={company.id}>
            <div className="dark:bg-system-darkness bg-system-200 flex rounded-md hover:opacity-90 transition-all duration-300 overflow-hidden">
              <div className="w-52 h-52 bg-violet-500 " />
              <div className="flex p-4 flex-col flex-1 lg:w-[500px]">
                {company.name}
                <p className="text-xs">{company.description}</p>

                <span className="h-0.5 bg-system-800 w-full my-2" />
                <p className="px-2 py-1 rounded bg-white/10 w-fit text-xs">
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
