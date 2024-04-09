'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { restApi } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, PenLine } from 'lucide-react'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import updateUserSession from './actions'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

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
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData?.name,
      username: userData?.username,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await restApi.put('/users', values).then((res) => {
      if (res.data.success) {
        toast({
          title: 'Dados alterados.',
          description: res.data.message,
        })
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

  return (
    <Card className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <div className="md:w-1/2 space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="seu nome" />
                  </FormControl>
                  <FormDescription>
                    Digite aqui o nome no qual deveremos chama-lo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="seu usuário" />
                  </FormControl>
                  <FormDescription>
                    Digite aqui seu usuário de identificação unica.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="sm:ml-auto" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <PenLine size={16} />
            )}
            Salvar dados
          </Button>
        </form>
      </Form>
    </Card>
  )
}

export default UpdateUserForm
