'use client'

import { Asterisk, Eye, EyeOff, Loader2Icon, Rocket } from 'lucide-react'
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
import { restApi } from '../../../services/api'
import { useSearchParams } from 'next/navigation'

interface NovaSenhaProps {}

const formSchema = z.object({
  newPassword: z
    .string()
    .min(6, { message: 'sua senha deve ter mais de 6 characters' }),
  confirmNewPassword: z
    .string()
    .min(6, { message: 'sua senha deve ter mais de 6 characters' }),
})

const NovaSenha: FunctionComponent<NovaSenhaProps> = () => {
  const [typePassword, setTypePassword] = useState(true)

  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.newPassword === values.confirmNewPassword) {
      const result = await restApi.post('/new_password', { ...values, token })

      if (result.data.success) {
        toast({
          title: 'Parabéns!',
          description: `Senha redefinida com sucesso.`,
          variant: 'success',
        })
        router.push('/login')
        return
      }

      if (!result.data.success) {
        toast({
          title: 'Não foi possivel redefinir senha.',
          description: result.data.message,
          variant: 'destructive',
        })
      }
    } else {
      toast({
        title: 'Verifique a confirmação da senha.',
        description: `Senha e confirmar senha devem ser iguais.`,
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="w-full flex">
      <div className="m-auto w-4/5 justify-center flex flex-col items-center sm:p-4 lg:w-2/3 gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full bg-system-200 dark:bg-system-darkness sm:rounded-3xl py-20 px-10 lg:px-20 gap-4"
          >
            <h1 className="dark:text-system-50 text-system-600 font-bold text-4xl">
              Criar senha
            </h1>

            <FormField
              control={form.control}
              name="newPassword"
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
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirme sua senha"
                      type={typePassword ? 'password' : 'text'}
                      {...field}
                      icon={Asterisk}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
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

export default NovaSenha
