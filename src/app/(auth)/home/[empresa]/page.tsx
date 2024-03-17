import HeaderPage from '@/components/layout/HeaderPage'
import { Home } from 'lucide-react'
import { FunctionComponent } from 'react'
import PlayerVideo from './components/PlayerVideo'

interface ClientHomeProps {
  params: { empresa: string }
}

const ClientHome: FunctionComponent<ClientHomeProps> = async ({ params }) => {
  return (
    <div className="flex flex-col w-full">
      <HeaderPage
        title={params.empresa}
        description="Conheça mais um pouco sobre nós"
        icon={Home}
      />

      <PlayerVideo />
    </div>
  )
}

export default ClientHome
