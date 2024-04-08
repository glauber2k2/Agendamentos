import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import { getSession } from '@/lib/session'
import UpdateUserForm from './UpdateUserForm'

interface MinhaContaProps {}

const MinhaConta: FunctionComponent<MinhaContaProps> = async () => {
  const session = await getSession()

  return (
    <div className="h-full flex justify-center items-center w-full">
      <div className="flex flex-col gap-8 rounded-lg w-1/2">
        <h1 className="dark:text-neutral-50 text-neutral-600 font-bold text-4xl">
          Minha conta
        </h1>

        <div className="flex items-center gap-4">
          <UpdateUserForm userData={session} />
        </div>

        <Link href={'/feed'}>
          <Button className="w-full" variant={'outline'}>
            <Home size={16} /> Voltar para home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default MinhaConta
