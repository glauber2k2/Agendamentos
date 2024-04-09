import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function PlanForm() {
  return (
    <div className="space-y-4">
      <Card>
        <div className=" p-4 md:p-10 font-semibold flex items-center gap-4">
          <CheckCircle2 />
          <span className="">
            Plano Gratis
            <p className="text-xs opacity-70">
              Agendamentos ilimitados como cliente.
            </p>
          </span>
        </div>
      </Card>
      <Card>
        <div className=" p-4 md:p-10 font-semibold flex items-center gap-4">
          <span className="">
            Plano Simples
            <p className="text-xs opacity-70">
              1 Empresa + 5 Vagas funcionários.
            </p>
          </span>
        </div>
      </Card>
      <Card>
        <div className=" p-4 md:p-10 font-semibold flex items-center gap-4">
          <span className="">
            Plano Intermediário
            <p className="text-xs opacity-70">
              1 Empresa + 15 Vagas funcionários.
            </p>
          </span>
        </div>
      </Card>
      <Card>
        <div className=" p-4 md:p-10 font-semibold flex items-center gap-4">
          <span className="">
            Plano Avançado
            <p className="text-xs opacity-70">
              2 Empresa + 15 Vagas funcionários.
            </p>
          </span>
        </div>
      </Card>
    </div>
  )
}
