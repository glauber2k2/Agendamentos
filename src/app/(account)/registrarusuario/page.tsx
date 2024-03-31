'use client'

import {
  Asterisk,
  AtSign,
  Eye,
  EyeOff,
  Loader2Icon,
  Rocket,
  User2,
} from 'lucide-react'
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

interface RegistrarUsuarioProps {}

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'seu nome precisa ter no mínimo 3 characters' })
    .max(20, { message: 'seu nome pode ter no máximo 20 characters' })
    .toLowerCase(),
  username: z
    .string()
    .min(3, { message: 'seu usuário precisa no mínimo 3 characters' })
    .max(20, { message: 'seu nome pode ter no máximo 20 characters' })
    .toLowerCase(),
  email: z
    .string()
    .email({ message: 'Digite um email válido.' })
    .max(50, { message: 'Digite um email válido.' })
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: 'Sua senha precisa ter no minimo 6 characters' })
    .max(30, { message: 'Sua senha não pode ter mais de 30 characters' }),
})

const RegistrarUsuario: FunctionComponent<RegistrarUsuarioProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [typePassword, setTypePassword] = useState(true)

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    await restApi
      .post('/users', values)
      .then(() => {
        toast({
          title: 'Parabéns!',
          description: `${values.username} criado com sucesso!`,
          variant: 'success',
        })
        setIsLoading(false)
        router.replace('/login')
      })
      .catch((error) => {
        toast({
          title: 'Algo deu errado.',
          description: `${values.username} não pode ser criado.`,
          variant: 'destructive',
        })
        console.error('Erro:', error)
      })
  }

  return (
    <div className="w-full flex">
      <div className="m-auto w-full sm:w-4/5 justify-center flex flex-col items-center sm:p-4 lg:w-2/3 gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col w-full bg-system-200 dark:bg-system-darkness sm:rounded-3xl py-20 px-10 lg:px-20 gap-4 h-screen sm:h-auto"
          >
            <h1 className="dark:text-system-50 text-system-600 font-bold text-4xl">
              Registrar-se
            </h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira seu nome" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu usuário"
                      {...field}
                      icon={User2}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="gap-2 flex">
                    Senha
                    <button
                      type="button"
                      onClick={() => setTypePassword(!typePassword)}
                    >
                      {typePassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira sua senha"
                      type={typePassword ? 'password' : 'text'}
                      {...field}
                      icon={Asterisk}
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
              Registrar-se
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default RegistrarUsuario
