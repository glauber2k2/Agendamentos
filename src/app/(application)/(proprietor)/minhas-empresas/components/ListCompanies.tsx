'use client'

import { ArrowUpDown, Search } from 'lucide-react'
import React, { useState } from 'react'
import CardCompany from './CardCompany'
import ModalAddEmpresa from './ModalAddEmpresa'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'

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
  const [isSorted, setIsSorted] = useState(false)
  const [sortedCompanies, setSortedCompanies] = useState<Company[]>(companies)

  const orderCompanies = () => {
    if (!isSorted) {
      const sorted = [...companies].sort((a, b) => a.name.localeCompare(b.name))
      setSortedCompanies(sorted)
    } else {
      setSortedCompanies(companies)
    }
    setIsSorted(!isSorted)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <Button variant={'ghost'} size={'icon'}>
          <Search />
        </Button>
        <Toggle onClick={orderCompanies} variant={'ghost'} size={'icon'}>
          <ArrowUpDown />
        </Toggle>
        <ModalAddEmpresa />
      </div>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
        {sortedCompanies.map((company: Company) => (
          <CardCompany key={company.identifier} company={company} />
        ))}
      </div>
    </div>
  )
}
