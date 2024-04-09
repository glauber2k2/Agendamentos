import { getSession } from '@/lib/session'
import UpdateUserForm from './_components/UpdateUserForm'
import Divider from '@/components/Divider'

export default async function Page() {
  const session = await getSession()
  return (
    <div className="md:p-10 p-4">
      <h1 className="text-xl font-semibold">Gerais</h1>
      <p className="text-sm opacity-70">
        defina aqui suas preferencias em nosso sistema.
      </p>
      <Divider className="my-8" />
      <UpdateUserForm userData={session} />
    </div>
  )
}
