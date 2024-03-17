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

interface RegistrarUsuarioProps {}

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Digite um email válido.' })
    .max(50, { message: 'Digite um email válido.' }),
  password: z
    .string()
    .min(6, { message: 'Sua senha precisa ter no minimo 6 characters' })
    .max(30, { message: 'Sua senha não pode ter mais de 30 characters' }),
})

const RegistrarUsuario: FunctionComponent<RegistrarUsuarioProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    axios
      .post('http://localhost:8000/users', values)
      .then((response) => {
        console.log('Resposta:', response.data)
      })
      .catch((error) => {
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
              className="space-y-8 "
              noValidate
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
                  <FormItem>
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
