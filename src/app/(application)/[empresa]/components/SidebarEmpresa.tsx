import { ActiveRoute } from '@/components/ActiveRoute'
import { Skeleton } from '@/components/ui/skeleton'
import { AtSign, Calendar, Coins, AlertCircle, History } from 'lucide-react'
import { FunctionComponent } from 'react'
import { headers } from 'next/headers'
import { fetchServer } from '@/services/serverReq'

interface SidebarEmpresaProps {}

interface empresaProps {
  business_name: string
  description: string
  identifier: string
}

const SidebarEmpresa: FunctionComponent<SidebarEmpresaProps> = async () => {
  const headersList = headers()
  const company = headersList.get('next-url')?.replace('/', '') || ''

  const data = await fetchServer(`/companies?identifier=${company}`)
  const empresa: empresaProps = data.responseData[0]
  const user = true

  return (
    <div className="md:border-r border-neutral-300 dark:border-neutral-800 p-8">
      {empresa ? (
        <span className="flex flex-col mb-10">
          <h1 className="font-semibold text-2xl tracking-widest">
            {empresa?.business_name}
          </h1>

          <p className="flex items-center gap-1 text-sm opacity-80">
            <AtSign size={14} />
            {empresa?.identifier}
          </p>

          <p className="text-xs mt-4 border-l-2 border-violet-600 pl-2">
            {empresa?.description}
          </p>
        </span>
      ) : (
        <span className="flex flex-col mb-10 gap-2">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-8 mt-2" />
        </span>
      )}

      {user ? (
        <div className="flex flex-col gap-2">
          <ActiveRoute href={`/${company}/agendar`}>
            <Calendar size={20} />
            Agendar
          </ActiveRoute>

          <ActiveRoute href={'/'}>
            <History size={20} />
            Historico
          </ActiveRoute>

          <ActiveRoute href={'/'}>
            <Coins size={20} />
            Carteira
          </ActiveRoute>
        </div>
      ) : (
        <span className="flex items-center gap-2 opacity-70 text-sm select-none">
          <AlertCircle /> Logue para interagir.
        </span>
      )}
    </div>
  )
}

export default SidebarEmpresa
