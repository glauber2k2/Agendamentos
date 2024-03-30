'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Asterisk, Facebook, User2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import loginAction from './action'

const formSchema = z.object({
  username: z
    .string()
    .max(20, { message: 'Digite um email válido.' })
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: 'Sua senha precisa ter no minimo 6 characters' })
    .max(30, { message: 'Sua senha não pode ter mais de 30 characters' }),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    loginAction(values)
  }

  return (
    <div className="w-full flex">
      <div className="m-auto sm:w-4/5 justify-center flex flex-col items-center p-4 lg:w-2/3 gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col w-full bg-system-200 dark:bg-system-darkness rounded-3xl py-20 px-10 lg:px-20 gap-4"
          >
            <h1 className="dark:text-system-50 text-system-600 font-bold text-4xl">
              Fazer login
            </h1>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu usuario"
                      icon={User2}
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
                  <FormLabel className="gap-2 flex">Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira sua senha"
                      {...field}
                      icon={Asterisk}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant={'link'}
              className="ml-auto text-red-400"
              size={'slim'}
            >
              <Link href={'/recuperar-senha'}> Esqueci minha senha.</Link>
            </Button>

            <Button type="submit">Enviar</Button>
          </form>
        </Form>

        <div className="flex justify-between items-center w-full dark:bg-system-darkness bg-system-200 m-auto rounded-3xl gap-1 p-12">
          <div>
            <h1 className="text-xl font-bold dark:text-system-100 text-system-600">
              Ainda nao possui conta?
            </h1>
            <Button
              variant={'link'}
              className="mr-auto text-violet-500"
              size={'slim'}
            >
              <Link href={'registrarusuario'}>Registre-se</Link>
            </Button>
          </div>
          <div
            className="flex justify-center gap-4
        "
          >
            <Button size={'icon'} className="text-xl rounded-full">
              G
            </Button>
            <Button size={'icon'} className="text-xl rounded-full">
              <Facebook />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
