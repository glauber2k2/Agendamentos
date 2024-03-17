'use client'
import HeaderPage from '@/components/layout/HeaderPage'
import { UserCog } from 'lucide-react'

function Empresa() {
  return (
    <div className="w-full">
      <HeaderPage
        title="Editar Empresa"
        description="Altere aqui suas informações de usuário."
        icon={UserCog}
      />
    </div>
  )
}

export default Empresa
