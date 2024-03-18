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
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Asterisk, AtSign, Eye, EyeOff, Facebook, LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

export function Login() {
  const [typePassword, setTypePassword] = useState(true)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      if (result.status == 401) {
        toast({
          title: 'Login invalido.',
          description: 'Verifique seu email e senha.',
          variant: 'destructive',
        })
      }
      return
    }

    router.replace('/home/home')
  }

  return (
    <div className="w-full flex">
      <div className="m-auto justify-center flex flex-col items-center w-2/3 gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full bg-system-darkness rounded-3xl p-20 gap-4"
          >
            <h1 className="text-system-50 font-bold text-4xl">Fazer login</h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu usuario"
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

            <Button
              variant={'link'}
              className="ml-auto text-system-300"
              size={'slim'}
            >
              <Link href={'/'}> Esqueci minha senha.</Link>
            </Button>
            <Button>
              <LogIn />
              Logar
            </Button>
          </form>
        </Form>

        <div className="flex justify-between items-center w-full bg-system-darkness m-auto rounded-3xl gap-1 p-12">
          <div>
            <h1 className="text-xl font-bold text-system-100">
              Ainda nao possui conta?
            </h1>
            <Button
              variant={'link'}
              className="mr-auto text-system-300"
              size={'slim'}
            >
              <Link href={'/login/registrarempresa'}>Registre-se</Link>
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

export default Login
