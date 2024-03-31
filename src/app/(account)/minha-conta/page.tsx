'use client'

import ChangeInput from '@/components/ChangeInput'
import { Button } from '@/components/ui/button'
import { Home, Loader2, PenBox, User2 } from 'lucide-react'
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
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'

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
  const { toast } = useToast()

  // const session = await getSession()
  const session = {
    username: 'em breve',
    name: 'em breve',
  }

  useEffect(() => {
    form.setValue('name', session?.name || '')
    form.setValue('username', session?.username || '')
  }, [session])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: session?.name,
      username: session?.username,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isEditableInput) {
      setIsEditableInput(true)
      return
    }
    if (isEditableInput) {
      await restApi.put('/users', values)
      setIsEditableInput(false)
      toast({
        title: 'Parabéns!',
        description: `${values.username} editado com sucesso!`,
        variant: 'success',
      })
      return
    }
  }

  return (
    <div className="h-full flex justify-center items-center w-full">
      <div className="px-10 py-10 flex flex-col gap-8 bg-system-darkness rounded-lg relative">
        <h1 className="dark:text-system-50 text-system-600 font-bold text-4xl">
          Minha conta
        </h1>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 flex items-center justify-center bg-system-300 rounded-full">
            <User2 />
          </div>
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
                  <FormItem className="text-sm flex items-center gap-1">
                    @
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
            type="submit"
            form="edituser"
            className="absolute right-8 sm:relative"
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <PenBox />
            )}
          </Button>
        </div>
        <Link href={'/feed'}>
          <Button className="w-full">
            <Home /> Voltar para home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default MinhaConta
