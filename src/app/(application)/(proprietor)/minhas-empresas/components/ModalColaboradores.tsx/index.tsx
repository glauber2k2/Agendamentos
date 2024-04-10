'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Users2 } from 'lucide-react'
import { FunctionComponent } from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'

interface ModalColaboradoresProps {
  id_empresa: string
}

const ModalColaboradores: FunctionComponent<ModalColaboradoresProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id_empresa,
}) => {
  const data = [
    {
      id: '728ed52f',
      qtdServices: null,
      name: 'Glauber',
      role: 'Gerente',
    },
    {
      id: '728ed52d',
      qtdServices: 58,
      name: 'Glauco',
      role: 'Barbeiro',
    },
    {
      id: '728ed52e',
      qtdServices: 87,
      name: 'Geovani',
      role: 'Barbeiro',
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="justify-start">
          <Users2 size={18} /> Gerenciar colaboradores
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <Users2 /> Gerenciar colaboradores
          </DialogTitle>
        </DialogHeader>
        <DataTable columns={columns} data={data} />
      </DialogContent>
    </Dialog>
  )
}

export default ModalColaboradores
