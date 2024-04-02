'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '@/services/api'
import { Button } from '@/components/ui/button'
import {
  ArrowDownUp,
  BadgeDollarSign,
  Calendar,
  ChevronUp,
  MoreVertical,
  Search,
} from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Divider from '@/components/Divider'
import ModalAddColaborador from './components/ModalAddColaborador'
import ModalAddEmpresa from './components/ModalAddEmpresa'

interface MinhasEmpresasProps {}

type Company = {
  id: string
  name: string
  business_name: string
  cnpj: string
  description: string
  identifier: string
  isVisible?: boolean
}

const MinhasEmpresas: FunctionComponent<MinhasEmpresasProps> = () => {
  const [companies, setCompanies] = useState<Company[]>([])

  function getCompanies() {
    restApi
      .get('/user_companies')
      .then((res) => setCompanies(res.data.responseData))
  }

  useEffect(() => {
    getCompanies()
  }, [])
  return (
    <div className="md:p-10 p-4 flex flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <Button variant={'ghost'} size={'icon'}>
          <Search />
        </Button>
        <ModalAddEmpresa handleUpdateList={getCompanies} />
        <Button variant={'ghost'} size={'icon'}>
          <ArrowDownUp />
        </Button>
      </div>
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="dark:bg-system-darkness bg-system-200 py-8 px-10 rounded-md gap-4 flex flex-col">
          <span className="flex items-center justify-between text-lg">
            Faturamento Janeiro
            <BadgeDollarSign />
          </span>
          <span className="text-3xl md:text-6xl font-medium">R$13292,93</span>
          <small className="text-xs flex items-center">
            <ChevronUp size={16} className="text-emerald-500" />
            +25% comparado ao ultimo mês
          </small>
        </div>
        <div className="dark:bg-system-darkness bg-system-200 py-8 px-10 rounded-md text-6xl gap-4 flex flex-col">
          <span className="flex items-center justify-between text-lg">
            Agendamentos Janeiro
            <Calendar />
          </span>

          <span className="text-3xl md:text-6xl font-medium">594</span>

          <small className="text-xs flex items-center">
            <ChevronUp size={16} className="text-emerald-500" />
            +25% comparado ao ultimo mês
          </small>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full ">
        {companies.map((company) => (
          <div
            key={company.identifier}
            className="p-4 bg-system-200 dark:bg-system-darkness rounded-md flex flex-col gap-4"
          >
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <Switch defaultChecked={company.isVisible} />
                <div className="text-sm">
                  {company.name}
                  <p className="text-xs">{company.identifier}</p>
                </div>
              </div>

              <Popover>
                <PopoverTrigger>
                  <Button variant={'ghost'}>
                    <MoreVertical size={18} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <ModalAddColaborador id_empresa={company.id} />
                </PopoverContent>
              </Popover>
            </div>
            <Divider />
            <div className="text-sm">{company.cnpj}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MinhasEmpresas
