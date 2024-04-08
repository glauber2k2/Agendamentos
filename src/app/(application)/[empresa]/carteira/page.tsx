//depois passar para o componente
'use client'

import { Tipografia } from '@/components/tipografia'
import { Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { FunctionComponent } from 'react'

interface PontosProps {}

const Pontos: FunctionComponent<PontosProps> = () => {
  return (
    <div className="w-full">
      <span className="flex flex-col mb-32">
        <Tipografia.Title>Minha carteira</Tipografia.Title>
        <Tipografia.Description>
          consulte aqui todas as suas carteiras e seus creditos obtidos.
        </Tipografia.Description>
      </span>

      <Card className="flex h-40 justify-center items-center relative mb-10">
        <span className="flex flex-col">
          <Tipografia.Title>
            Bem vindo a sua central de carteiras.
          </Tipografia.Title>
          <Tipografia.Description>
            consulte aqui todas as suas carteiras e seus creditos obtidos.
          </Tipografia.Description>
        </span>

        <img
          src="/mulherAtrasada.png"
          className="absolute object-scale-down w-40 left-14 bottom-0"
        />
      </Card>

      <div className="grid grid-cols-6 gap-8">
        <Card className="border-dashed flex justify-center items-center p-8 bg-transparent dark:bg-transparent border-2 border-black/20 dark:border-white/20">
          <Plus className="text-neutral-500" />
        </Card>
        <Card className="border-dashed flex justify-center items-center p-8 bg-transparent dark:bg-transparent border-2 border-black/20 dark:border-white/20 ">
          <Plus className="text-neutral-500" />
        </Card>
        <Card className="border-dashed flex justify-center items-center p-8 bg-transparent dark:bg-transparent border-2 border-black/20 dark:border-white/20">
          <Plus className="text-neutral-500" />
        </Card>
        <Card className="border-dashed flex justify-center items-center p-8 bg-transparent dark:bg-transparent border-2 border-black/20 dark:border-white/20">
          <Plus className="text-neutral-500" />
        </Card>
        <Card className="border-dashed flex justify-center items-center p-8 bg-transparent dark:bg-transparent border-2 border-black/20 dark:border-white/20">
          <Plus className="text-neutral-500" />
        </Card>
        <Card className="border-dashed flex justify-center items-center p-8 bg-transparent dark:bg-transparent border-2 border-black/20 dark:border-white/20">
          <Plus className="text-neutral-500" />
        </Card>
      </div>
    </div>
  )
}

export default Pontos
