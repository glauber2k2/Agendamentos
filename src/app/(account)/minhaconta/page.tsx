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
import { Loader2, Map, PenBox, User2 } from 'lucide-react'
import { FunctionComponent, useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { restApi } from '../../../../services/api'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

interface MinhaContaProps {}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Seu nome deverá ter no minimo 2 characters',
  }),
  name: z.string().min(2, {
    message: 'Seu nome deverá ter no minimo 2 characters',
  }),
})

const MinhaConta: FunctionComponent<MinhaContaProps> = () => {
  const [isEditableInput, setIsEditableInput] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    form.setValue('name', user?.name || '')
    form.setValue('username', user?.username || '')
  }, [user])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name,
      username: user?.username,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isEditableInput) {
      setIsEditableInput(true)
      return
    }
    if (isEditableInput) {
      setIsLoading(true)
      await restApi.put('users', values)
      setIsLoading(false)
      setIsEditableInput(false)
      return
    }
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
              <span className="h-16 w-16 bg-violet-700 flex rounded-full items-center justify-center">
                <User2 size={32} />
              </span>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} id="edituser">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ChangeInput
                            isEditable={isEditableInput}
                            {...field}
                            autoComplete="off"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ChangeInput
                            isEditable={isEditableInput}
                            {...field}
                            autoComplete="off"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              <Button
                variant={'ghost'}
                size={'icon'}
                className="mb-auto"
                type="submit"
                form="edituser"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <PenBox />}
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
