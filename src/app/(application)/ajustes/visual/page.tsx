import Divider from '@/components/Divider'
import ThemeForm from '../_components/ThemeForm'

export default function page() {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-xl font-semibold">Aparência</h1>
      <p className="text-sm opacity-70">
        defina a melhor aparência do sistema para você.
      </p>
      <Divider className="my-8" />
      <ThemeForm />
    </div>
  )
}
