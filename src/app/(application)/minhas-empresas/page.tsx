'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '../../../../services/api'
import { Button } from '@/components/ui/button'
import { PenLine } from 'lucide-react'
import ModalAdicionarEmpresa from './components/ModalAdicionarEmpresa'

interface MinhasEmpresasProps {}

type Company = {
  name: string
  business_name: string
  cnpj: string
  description: string
  identifier: string
}

const MinhasEmpresas: FunctionComponent<MinhasEmpresasProps> = () => {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    restApi.get('/user_companies').then((res) => setCompanies(res.data))
  }, [])
  return (
    <div className="p-10 flex flex-col gap-8 items-end">
      <ModalAdicionarEmpresa setCompanies={setCompanies} />
      <div className="grid md:grid-cols-4 gap-4 w-full ">
        {companies.map((company) => (
          <div
            key={company.identifier}
            className="p-4 bg-system-200 dark:bg-system-darkness rounded-md"
          >
            <div className="flex items-center justify-between">
              {company.name}
              <Button variant={'ghost'}>
                <PenLine size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MinhasEmpresas
