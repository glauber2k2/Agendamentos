'use client'

import { AtSign, Loader2Icon, Rocket } from 'lucide-react'
import { FunctionComponent, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { restApi } from '../../../../services/api'

interface RecuperarSenhaProps {}

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Digite um email válido.' })
    .max(50, { message: 'Digite um email válido.' })
    .toLowerCase(),
})

const RecuperarSenha: FunctionComponent<RecuperarSenhaProps> = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    await restApi
      .post('/recover_password', values)
      .then(() => {
        toast({
          title: 'Confira seu email.',
          description: `Você receberá um link de redefinição de senha em ${values.email}.`,
          variant: 'success',
        })
        setIsLoading(false)
        router.replace('/login')
      })
      .catch((error) => {
        toast({
          title: 'Desculpe, algo deu errado.',
          description: `Tente novamente mais tarde.`,
          variant: 'destructive',
        })
        console.error('Erro:', error)
      })
  }

  return (
    <div className="w-full flex">
      <div className="m-auto sm:w-4/5 justify-center flex flex-col items-center sm:p-4 lg:w-2/3 gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col w-full bg-system-200 dark:bg-system-darkness sm:rounded-3xl py-20 px-10 lg:px-20 gap-4 h-dvh sm:h-auto"
          >
            <h1 className="dark:text-system-50 text-system-600 font-bold text-4xl">
              Recuperar senha
            </h1>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu email"
                      icon={AtSign}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading}>
              {isLoading ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <Rocket />
              )}
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default RecuperarSenha
