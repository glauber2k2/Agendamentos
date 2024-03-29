'use client'
import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '../../../../services/api'
import { Building2 } from 'lucide-react'
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
      .then((res) => setCompanies(res.data))
  }, [])

  return (
    <div className="p-6 md:p-20 grid md:grid-cols-4 gap-4 md:gap-10">
      {companies.map((company) => (
        <Link
          href={`/${company.identifier}`}
          className="dark:bg-system-darkness bg-system-200 p-8 rounded-md flex flex-col gap-4 hover:opacity-90 transition-all duration-300"
          key={company.id}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Building2 />
              {company.name}
            </span>

            <div className="w-10 h-10 bg-violet-400 rounded-full" />
          </div>

          <span className="h-0.5 bg-system-800" />

          {company.description}
        </Link>
      ))}
    </div>
  )
}

export default Feed
