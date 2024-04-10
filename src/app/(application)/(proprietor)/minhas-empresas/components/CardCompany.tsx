import Divider from '@/components/Divider'
import { MoreVertical } from 'lucide-react'
import { FunctionComponent } from 'react'
import ModalAddColaborador from './ModalAddColaborador'
import ModalDeleteEmpresa from './ModalDeleteEmpresa'
import { Switch } from '@/components/ui/switch'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import ModalColaboradores from './ModalColaboradores.tsx'

interface CardCompanyProps {
  company: {
    id: string
    name: string
    business_name: string
    cnpj: string
    description: string
    identifier: string
    isVisible?: boolean
  }
}

const CardCompany: FunctionComponent<CardCompanyProps> = ({ company }) => {
  return (
    <div
      key={company.identifier}
      className="p-4 dark:border-neutral-800 border-neutral-300 border rounded-lg flex flex-col gap-4"
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
          <PopoverTrigger asChild>
            <Button variant={'ghost'}>
              <MoreVertical size={18} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col">
            <ModalAddColaborador id_empresa={company.id} />
            <ModalColaboradores id_empresa={company.id} />
            <ModalDeleteEmpresa />
          </PopoverContent>
        </Popover>
      </div>
      <Divider />
      <div className="text-sm">{company.cnpj}</div>
    </div>
  )
}

export default CardCompany
