'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { UserPlus2 } from 'lucide-react'
import { FunctionComponent } from 'react'
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
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    axios
      .post('http://localhost:8000/users', values)
      .then(() => {
        toast({
          title: 'Parabéns!',
          description: `${values.username} criado com sucesso!`,
          variant: 'default',
        })
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
    <div className="p-8 w-full">
      <Card>
        <CardHeader>
          <CardTitle>
            <UserPlus2 />
            Criar Conta
          </CardTitle>
          <CardDescription>
            Crie sua conta e dê o proximo passo para economizar e facilitar seu
            dia.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>
            <UserPlus2 />
            Novo usuário
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
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
                        placeholder="Digite sua nome de usuário"
                        {...field}
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
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu email"
                        {...field}
                        type="email"
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
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite sua senha"
                        {...field}
                        type="password"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Cadastrar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegistrarUsuario
