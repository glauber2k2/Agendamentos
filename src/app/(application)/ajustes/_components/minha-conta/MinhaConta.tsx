import { FunctionComponent } from 'react'
import { getSession } from '@/lib/session'
import UpdateUserForm from './UpdateUserForm'
import { Card } from '@/components/ui/card'

interface MinhaContaProps {}

const MinhaConta: FunctionComponent<MinhaContaProps> = async () => {
  const session = await getSession()

  return (
    <Card className="flex flex-col gap-8 rounded-lg p-10">
      <h1 className=" font-bold text-4xl">Dados do usuário</h1>

      <div className="flex items-center gap-4">
        <UpdateUserForm userData={session} />
      </div>
    </Card>
  )
}

export default MinhaConta
