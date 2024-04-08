import { FunctionComponent } from 'react'

import PlayerVideo from './components/PlayerVideo'

interface CompanyHomeProps {}

const CompanyHome: FunctionComponent<CompanyHomeProps> = () => {
  return (
    <div className="p-8 w-full">
      <PlayerVideo />
    </div>
  )
}

export default CompanyHome
