'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Loader2Icon, Plus, Rocket } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { restApi } from '../../../../../services/api'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  business_name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  cnpj: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  identifier: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  main_company_id: z.string().optional(),
})

export default function ModalAdicionarEmpresa({
  setCompanies,
}: {
  setCompanies: React.Dispatch<
    React.SetStateAction<z.infer<typeof formSchema>[]>
  >
}) {
  const { toast } = useToast()

  const [openModal, setOpenModal] = useState<boolean>()
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      business_name: '',
      cnpj: '',
      description: '',
      identifier: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    await restApi.post('companies', values).then((res) => {
      delete res.data.user
      setCompanies((companies) => [...companies, res.data])
    })
    setLoading(false)
    toast({
      title: 'Parabéns!',
      description: `${values.name} criado com sucesso!`,
      variant: 'success',
    })
    setOpenModal(false)
  }
  return (
    <Dialog open={openModal}>
      <DialogTrigger asChild>
        <Button variant={'ghost'}>
          <Plus size={16} />
          Adicionar empresa
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <DialogHeader>
              <DialogTitle>Adicionar empresa</DialogTitle>
              <DialogDescription>
                Adicione quantas unidades seu plano permitir.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome oficial</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da empresa" {...field} />
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
                    <FormLabel>Nome Fantasia</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome fantasia" {...field} />
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
                      <Input placeholder="CNPJ da empresa" {...field} />
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
                      <Input placeholder="Descrição da empresa" {...field} />
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
                    <FormLabel>
                      Identificador
                      <span
                        title="O identificador se trata do @ da empresa, na qual o usuário podera buscar diretamente pela url"
                        className="text-blue-500 cursor-pointer ml-2"
                      >
                        ?
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Identificador" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="main_company_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Id empresa principal</FormLabel>
                    <FormControl>
                      <Input placeholder="Opcional" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <Loader2Icon className="animate-spin" size={16} />
                ) : (
                  <Rocket size={16} />
                )}
                Cadastrar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
