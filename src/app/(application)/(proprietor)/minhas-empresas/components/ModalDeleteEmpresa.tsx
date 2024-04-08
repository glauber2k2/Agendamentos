'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Building2, Loader2Icon, Trash2 } from 'lucide-react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { FunctionComponent } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { restApi } from '@/services/api'
import { useToast } from '@/components/ui/use-toast'
import revalidateUserCompanies from '../actions'

interface ModalDeleteEmpresaProps {}

const formSchema = z.object({
  finalCNPJ: z.string().min(6, {
    message: 'você deve preencher os 6 últimos dígitos do cnpj.',
  }),
})

const ModalDeleteEmpresa: FunctionComponent<ModalDeleteEmpresaProps> = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      finalCNPJ: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await restApi.post('/companies', values)

    if (result.data.success) {
      toast({
        title: 'Parabéns!',
        description: `Você criou a empresa ${values.finalCNPJ}.`,
      })
      form.reset()
      revalidateUserCompanies()
      return
    }

    if (!result.data.success) {
      toast({
        title: `Não foi possivel criar ${values.finalCNPJ}.`,
        description: result.data.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="justify-start text-red-500">
          <Trash2 size={18} /> Deletar empresa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <Building2 /> Deletar empresa
          </DialogTitle>
          <DialogDescription>Confirme o CNPJ</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="finalCNPJ"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="text-xs opacity-80">
                    6 últimos dígitos.
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button
              variant={'destructive'}
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? (
                <Loader2Icon className="animate-spin" size={16} />
              ) : (
                <Trash2 size={16} />
              )}
              Deletar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalDeleteEmpresa
