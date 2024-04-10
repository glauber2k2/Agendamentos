'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Loader2Icon, Send, User2, UserPlus2 } from 'lucide-react'
import { FunctionComponent } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { restApi } from '@/services/api'
import { useToast } from '@/components/ui/use-toast'

interface ModalAddColaboradorProps {
  id_empresa: string
}

const formSchema = z.object({
  invitedUsername: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

const ModalAddColaborador: FunctionComponent<ModalAddColaboradorProps> = ({
  id_empresa,
}) => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invitedUsername: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await restApi.post('/invite_member', {
      ...values,
      companyId: id_empresa,
    })

    if (result.data.success) {
      toast({
        title: 'Parabéns!',
        description: `Você convidou ${values.invitedUsername} para sua empresa.`,
      })
      form.reset()
      return
    }

    if (!result.data.success) {
      toast({
        title: `Não foi possivel convidar ${values.invitedUsername}.`,
        description: result.data.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="justify-start">
          <UserPlus2 size={18} /> Convidar colaborador
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <UserPlus2 /> Convidar colaborador
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="invitedUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Colaborador</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} icon={User2} />
                  </FormControl>
                  <FormDescription>
                    Insira o username para convidar
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <Loader2Icon className="animate-spin" size={16} />
              ) : (
                <Send size={16} />
              )}
              Convidar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalAddColaborador
