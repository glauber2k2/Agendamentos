import { FunctionComponent } from 'react'

import { fetchServer } from '@/services/serverReq'
import ListCompanies from './components/ListCompanies'

interface MinhasEmpresasProps {}

const MinhasEmpresas: FunctionComponent<MinhasEmpresasProps> = async () => {
  const data = await fetchServer('/user_companies', {
    next: { tags: ['getUserCompanies'] },
  })

  return (
    <div className="md:p-10 p-4">
      <ListCompanies companies={data.responseData} />
    </div>
  )
}

export default MinhasEmpresas
