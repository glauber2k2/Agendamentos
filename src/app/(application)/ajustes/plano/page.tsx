import Divider from '@/components/Divider'
import PlanForm from '../_components/PlanForm'

export default async function Page() {
  return (
    <div className="md:p-10 p-4">
      <h1 className="text-xl font-semibold">Meu plano</h1>
      <p className="text-sm opacity-70">
        defina aqui toda a sua configuração e gerenciamento de seu plano.
      </p>
      <Divider className="my-8" />

      <PlanForm />
    </div>
  )
}
