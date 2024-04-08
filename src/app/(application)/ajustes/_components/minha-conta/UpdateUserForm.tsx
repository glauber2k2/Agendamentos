'use client'

import ChangeInput from '@/components/ChangeInput'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { restApi } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { PenLine, Send, User2 } from 'lucide-react'
import { FunctionComponent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import updateUserSession from './actions'

interface UpdateUserFormProps {
  userData: {
    name: string
    username: string
  }
}

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Seu nome deverá ter no minimo 2 characters',
    })
    .optional(),
  name: z
    .string()
    .min(2, {
      message: 'Seu nome deverá ter no minimo 2 characters',
    })
    .optional(),
})

const UpdateUserForm: FunctionComponent<UpdateUserFormProps> = ({
  userData,
}) => {
  const [isEditableInput, setIsEditableInput] = useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isEditableInput) {
      setIsEditableInput(true)
      return
    }
    if (isEditableInput) {
      await restApi.put('/users', values).then((res) => {
        if (res.data.success) {
          toast({
            title: 'Dados alterados.',
            description: res.data.message,
          })
          setIsEditableInput(false)
        } else {
          toast({
            title: 'Erro!',
            description: res.data.message,
            variant: 'destructive',
          })
        }
      })

      await updateUserSession()
      return
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-neutral-500 flex items-center justify-center">
              <User2 />
            </div>
            <div>
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
                        placeholder={userData.name}
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
                  <FormItem className="text-sm flex items-center gap-1">
                    @
                    <FormControl>
                      <ChangeInput
                        isEditable={isEditableInput}
                        {...field}
                        autoComplete="off"
                        placeholder={userData.username}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {isEditableInput ? (
            <Button className="ml-auto">
              <Send size={16} /> Salvar dados
            </Button>
          ) : (
            <Button variant={'outline'} className="ml-auto">
              <PenLine size={16} /> Editar dados
            </Button>
          )}
        </form>
      </Form>
    </>
  )
}

export default UpdateUserForm
