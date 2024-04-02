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
import { Loader2Icon, Send, Plus, Building2, AtSign } from 'lucide-react'
import { FunctionComponent, useState } from 'react'
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
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { restApi } from '@/services/api'
import { useToast } from '@/components/ui/use-toast'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

interface ModalAddEmpresaProps {
  handleUpdateList: () => void
}

const formSchema = z.object({
  main_company_id: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .optional(),
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  business_name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  cnpj: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  identifier: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

const ModalAddEmpresa: FunctionComponent<ModalAddEmpresaProps> = ({
  handleUpdateList,
}) => {
  const [hasMainCompany, setHasMainCompany] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      business_name: '',
      cnpj: '',
      description: '',
      identifier: '',
      name: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await restApi.post('/companies', values).then(() => {
      toast({
        title: 'Parabéns!',
        description: `Você criou a empresa ${values.business_name}.`,
        variant: 'success',
      })
    })
    form.reset()
    handleUpdateList()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <Plus /> Adicionar empresa
          </DialogTitle>
          <DialogDescription>
            Limite equivalente ao plano contratado.
          </DialogDescription>
        </DialogHeader>
        <span className="flex items-center gap-2">
          <Switch
            onCheckedChange={setHasMainCompany}
            checked={hasMainCompany}
            onClick={() => form.resetField('main_company_id')}
          />
          Possui empresa principal.
        </span>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {hasMainCompany && (
              <FormField
                control={form.control}
                name="main_company_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa principal</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira o identificador"
                        {...field}
                        icon={Building2}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome original</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira o nome original" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="business_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome fantasia</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira o nome fantasia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identificador</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira o identificador único"
                      {...field}
                      icon={AtSign}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira o cnpj" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Insira a descrição" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
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

export default ModalAddEmpresa
