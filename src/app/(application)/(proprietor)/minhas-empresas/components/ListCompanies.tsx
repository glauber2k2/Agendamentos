'use client'

import { ArrowUpDown, Search } from 'lucide-react'
import React, { useState } from 'react'
import CardCompany from './CardCompany'
import ModalAddEmpresa from './ModalAddEmpresa'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

export interface Company {
  id: string
  name: string
  business_name: string
  cnpj: string
  description: string
  identifier: string
  isVisible?: boolean
}

export default function ListCompanies({ companies }: { companies: Company[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSorted, setIsSorted] = useState(false)

  const orderCompanies = () => {
    setIsSorted(!isSorted)
  }

  const getFilteredAndSortedCompanies = () => {
    const filteredCompanies = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.business_name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (isSorted) {
      filteredCompanies.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filteredCompanies
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <Search />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="border-none">
            <Input
              icon={Search}
              placeholder="Buscar empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </PopoverContent>
        </Popover>
        <Toggle onClick={orderCompanies} variant={'ghost'} size={'icon'}>
          <ArrowUpDown />
        </Toggle>
        <ModalAddEmpresa />
      </div>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
        {getFilteredAndSortedCompanies().map((company: Company) => (
          <CardCompany key={company.identifier} company={company} />
        ))}
      </div>
    </div>
  )
}
