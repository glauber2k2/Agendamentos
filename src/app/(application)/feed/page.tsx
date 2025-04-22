import { FunctionComponent } from 'react'
import Link from 'next/link'
import Divider from '@/components/Divider'

interface Company {
  id: string
  name: string
  description: string
  identifier: string
}

interface FeedProps {}

const Feed: FunctionComponent<FeedProps> = async () => {
  const response = await fetch(
    'https://api-agendamentos.onrender.com/companies?visibleCompanies',
  )
  const data = await response.json()
  console.log(data)

  return (
    <div className="flex flex-col w-full justify-center gap-4 p-10 md:flex-row">
      <div className="flex w-full md:w-72 h-96 bg-neutral-900 justify-center items-center">
        Filtro
      </div>
      <div className="flex flex-col gap-4">
        {data.responseData.map((company: Company) => (
          <Link href={`/${company.identifier}`} key={company.id}>
            <div className="dark:bg-neutral-900/50 bg-neutral-200 grid sm:grid-cols-[12rem_1fr] sm:h-52 rounded-md hover:opacity-90 transition-all duration-300">
              <div className=" bg-violet-700 p-12">
                <img src="/logo.png" />
              </div>
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
