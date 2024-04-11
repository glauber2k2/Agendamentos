import { BadgeDollarSign, Calendar, ChevronUp } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className="md:p-10 p-4">
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="dark:bg-neutral-900 bg-neutral-200 py-8 px-10 rounded-md gap-4 flex flex-col">
          <span className="flex items-center justify-between text-lg">
            Faturamento Janeiro
            <BadgeDollarSign />
          </span>
          <span className="text-3xl md:text-5xl font-medium">R$13292,93</span>
          <small className="text-xs flex items-center">
            <ChevronUp size={16} className="text-emerald-500" />
            +25% comparado ao ultimo mês
          </small>
        </div>
        <div className="dark:bg-neutral-900 bg-neutral-200 py-8 px-10 rounded-md text-5xl gap-4 flex flex-col">
          <span className="flex items-center justify-between text-lg">
            Agendamentos Janeiro
            <Calendar />
          </span>

          <span className="text-3xl md:text-5xl font-medium">594</span>

          <small className="text-xs flex items-center">
            <ChevronUp size={16} className="text-emerald-500" />
            +25% comparado ao ultimo mês
          </small>
        </div>
      </div>
    </div>
  )
}
