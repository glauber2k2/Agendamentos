'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { restApi } from '../../../../services/api'
import { Button } from '@/components/ui/button'
import { PenLine, Plus } from 'lucide-react'

interface MinhasEmpresasProps {}

const MinhasEmpresas: FunctionComponent<MinhasEmpresasProps> = () => {
  const [companies, setCompanies] = useState([{ id: '', nome: '' }])
  useEffect(() => {
    restApi.get('/user_companies').then((res) => setCompanies(res.data))
  }, [])
  return (
    <div className="p-10 flex flex-col gap-8 items-end">
      <Button variant={'ghost'}>
        <Plus size={16} />
        Adicionar empresa
      </Button>
      <div className="grid md:grid-cols-4 gap-10 w-full ">
        {companies.map((company) => (
          <div
            key={company.id}
            className="p-4 bg-system-200 dark:bg-system-darkness rounded-md"
          >
            <div className="flex items-center justify-between">
              {company.nome}
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
