'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Collaborator = {
  id: string
  qtdServices: number
  role: string
  name: string
}

export const columns: ColumnDef<Collaborator>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'role',
    header: 'Cargo',
  },
  {
    accessorKey: 'qtdServices',
    header: 'Atendimentos',
  },
]
