import { FunctionComponent } from 'react'
import { Button } from '@/components/ui/button'
import { BadgeDollarSign, Calendar, ChevronUp, Search } from 'lucide-react'

import CardCompany from './components/CardCompany'
import { fetchServer } from '@/services/serverReq'
import ModalAddEmpresa from './components/ModalAddEmpresa'

interface MinhasEmpresasProps {}

interface Company {
  id: string
  name: string
  business_name: string
  cnpj: string
  description: string
  identifier: string
  isVisible?: boolean
}

const MinhasEmpresas: FunctionComponent<MinhasEmpresasProps> = async () => {
  const data = await fetchServer('/user_companies', {
    next: { tags: ['getUserCompanies'] },
  })

  return (
    <div className="md:p-10 p-4 flex flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <Button variant={'ghost'} size={'icon'}>
          <Search />
        </Button>
        <ModalAddEmpresa />
      </div>
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
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full ">
        {data.responseData.map((company: Company) => (
          <CardCompany key={company.identifier} company={company} />
        ))}
      </div>
    </div>
  )
}

export default MinhasEmpresas
