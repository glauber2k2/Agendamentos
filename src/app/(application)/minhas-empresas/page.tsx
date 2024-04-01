'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '../../../../services/api'
import { Button } from '@/components/ui/button'
import { Calendar, MoreVertical } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import ModalFuncionarios from './components/ModalFuncionarios'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

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

  useEffect(() => {
    restApi
      .get('/user_companies')
      .then((res) => setCompanies(res.data.responseData))
  }, [])
  return (
    <div className="p-10 flex flex-col gap-8 items-end">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-4 w-full ">
        {companies.map((company) => (
          <div
            key={company.identifier}
            className="p-4 bg-system-200 dark:bg-system-darkness rounded-md flex flex-col gap-4"
          >
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <Switch defaultChecked={company.isVisible} />
                <div>
                  {company.name}
                  <p className="text-xs">{company.identifier}</p>
                </div>
              </div>
              <div>
                <Button variant={'ghost'}>
                  <Calendar size={18} />
                </Button>

                <Popover>
                  <PopoverTrigger>
                    <Button variant={'ghost'}>
                      <MoreVertical size={18} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ModalFuncionarios id_empresa={company.id} />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <span className="h-0.5 flex bg-system-950" />

            <div className="text-sm">{company.cnpj}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MinhasEmpresas
