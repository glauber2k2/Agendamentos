import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function PlanForm() {
  return (
    <div className="space-y-4">
      <Card>
        <div className=" p-4 md:p-10 font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 />
            Plano Gratis
          </div>
          <p>10 funcionarios</p>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-2 p-4 md:p-10 font-semibold">
          <CheckCircle2 />
          Plano Pro
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-2 p-4 md:p-10 font-semibold">
          <CheckCircle2 />
          Plano Advanced
        </div>
      </Card>
    </div>
  )
}
