'use client'

import ChangeInput from '@/components/ChangeInput'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Map, PenBox } from 'lucide-react'
import { FunctionComponent, useState } from 'react'

interface MinhaContaProps {}

const MinhaConta: FunctionComponent<MinhaContaProps> = () => {
  const [isEditableInput, setIsEditableInput] = useState(true)

  async function editDataUser() {
    //exec change name and username value
    await new Promise((resolve) => setTimeout(resolve, 5000))
    setIsEditableInput(false)
  }
  return (
    <div className="w-full p-8">
      <Card>
        <CardHeader>
          <CardTitle>Minha conta</CardTitle>
          <CardDescription>
            Altere aqui os seu dados cadastrais.
          </CardDescription>

          <CardContent>
            <div className="p-10 flex items-center gap-4">
              <span className="h-16 w-16 bg-system-500 flex rounded-full " />
              <span>
                <ChangeInput isEditable={isEditableInput} />
                <p className="text-sm opacity-70">@glaubersm</p>
              </span>
              <Button
                variant={'ghost'}
                size={'icon'}
                className="mb-auto"
                onClick={editDataUser}
              >
                <PenBox />
              </Button>
            </div>

            <span className="flex gap-2 items-center my-8">
              <Map />
              Local
            </span>
            <div className="grid grid-cols-4 gap-2">
              <Input placeholder="estado" />
              <Input placeholder="cidade" />
              <Input placeholder="rua" />
              <Input placeholder="numero" />
              <Input placeholder="cep" />
              <Input placeholder="complemento" />
              <Input />
              <Input />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default MinhaConta
