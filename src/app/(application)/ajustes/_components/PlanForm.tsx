import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function PlanForm() {
  return (
    <div className="space-y-4">
      <Card>
        <div className="p-4 md:p-10 font-semibold flex items-center gap-4">
          <CheckCircle2 />
          <div className="">
            Plano Gratis
            <p className="text-xs opacity-70">
              Agendamentos ilimitados como cliente.
            </p>
          </div>
          <span className="ml-auto">GRATIS</span>
        </div>
      </Card>
      <Card>
        <div className="p-4 md:p-10 font-semibold flex items-center gap-4">
          <div className="">
            Plano Simples
            <p className="text-xs opacity-70">1 Empresa + 5 profissionais.</p>
          </div>
          <span className="ml-auto">R$99,90</span>
        </div>
      </Card>
      <Card>
        <div className="p-4 md:p-10 font-semibold flex items-center gap-4">
          <div className="">
            Plano Intermediário
            <p className="text-xs opacity-70">1 Empresa + 15 profissionais.</p>
          </div>
          <span className="ml-auto">R$199,90</span>
        </div>
      </Card>
      <Card>
        <div className="p-4 md:p-10 font-semibold flex items-center gap-4">
          <div className="">
            Plano Avançado
            <p className="text-xs opacity-70">2 Empresa + 15 profissionais.</p>
          </div>
          <span className="ml-auto">R$349,90</span>
        </div>
      </Card>
    </div>
  )
}
