'use client'

import CardFlag from '@/components/CardFlag'
import TitleBox from '@/components/layout/TitleBox'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AtSign,
  Binary,
  Building2,
  CalendarIcon,
  ChevronDown,
  CreditCard,
  Database,
  Eye,
  FileDigit,
  LayoutGrid,
  LogIn,
  MapPin,
  Paintbrush,
  Phone,
  Rocket,
  Shield,
  Text,
  User2,
  UserPlus2,
} from 'lucide-react'
import { FunctionComponent, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface RegistrarProps {}

const formSchema = z.object({
  nomeEmpresa: z.string(),
  nomeFantasia: z.string(),
  cnpj: z.string(),
  segmento: z.string(),
  cep: z.string(),
  estado: z.string(),
  cidade: z.string(),
  bairro: z.string(),
  rua: z.string(),
  numero: z.string(),
  plano: z.string(),
  complemento: z.string(),
  pontoDeRefefencia: z.string(),
  nomeDoPerfil: z.string(),
  corDoPerfil: z.string(),
  descricaoDoPerfil: z.string(),
  usuario: z.string(),
  telefone: z.string(),
  email: z.string().email(),
  senha: z.string().min(6),
  numeroCartao: z.string(),
  nomeCartao: z.string(),
  cvv: z.string(),
  vencimento: z
    .string()
    .refine((value) => /^\d{0,2}\/\d{0,2}$/.test(value), {
      message: 'Formato inválido. Use MM/YY.',
    })
    .transform((value) => {
      // Remove caracteres não numéricos
      const numericValue = value.replace(/\D/g, '')

      // Adiciona a barra após os dois primeiros caracteres (MM)
      if (numericValue.length > 2) {
        return numericValue.replace(/(\d{2})(\d{0,2})/, '$1/$2')
      }

      return numericValue
    }),
})

const Registrar: FunctionComponent<RegistrarProps> = () => {
  const [color, setColor] = useState('')
  const [vencimento, setVencimento] = useState()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const handleInputChange = (e: any) => {
    let inputValue = e.target.value.replace(/\D/g, '') // Remove caracteres não numéricos
    inputValue = inputValue.slice(0, 4) // Limita o comprimento para MM/YY

    // Adiciona a barra após os dois primeiros caracteres (MM)
    if (inputValue.length >= 2) {
      inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`
    }

    setVencimento(inputValue)
  }

  return (
    <div className="w-full p-8 ">
      <Card>
        <CardHeader>
          <CardTitle>
            <UserPlus2 />
            Criar Conta
          </CardTitle>
          <CardDescription>
            Crie sua conta e dê o proximo passo para o sucesso da sua empresa.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>
            <FileDigit />
            Etapas de cadastro
          </CardTitle>
          <CardDescription>
            Passe por todas as etapas e conclua o cadastro da sua empresa na
            TimeAlign!
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Form {...form}>
            <Tabs
              defaultValue="dados"
              className="flex flex-col justify-center items-center"
            >
              <TabsList className="gap-2">
                <TabsTrigger value="dados">Dados</TabsTrigger>
                <TabsTrigger value="perfil">Perfil</TabsTrigger>
                <TabsTrigger value="plano">Plano</TabsTrigger>
              </TabsList>

              <TabsContent value="dados">
                <Card className="w-full border-none shadow-none">
                  <CardHeader>
                    <CardTitle>
                      <Building2 />
                      1. Dados cadastrais
                    </CardTitle>
                    <CardDescription>
                      Preencha os dados da sua empresa.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="w-full grid grid-cols-4 gap-4">
                    <TitleBox
                      title="Dados Empresa"
                      icon={Building2}
                      className="col-span-4 mb-0 mt-6"
                    />
                    <FormField
                      control={form.control}
                      name="nomeEmpresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nome Empresa" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nomeFantasia"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nome Fantasia" {...field} />
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
                          <FormControl>
                            <Input
                              placeholder="CNPJ"
                              {...field}
                              icon={Binary}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="segmento"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Segmento" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <TitleBox
                      title="Endereço"
                      icon={MapPin}
                      className="col-span-4 mb-0 mt-2"
                    />

                    <FormField
                      control={form.control}
                      name="cep"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="CEP" {...field} icon={Binary} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="estado"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Estado" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cidade"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Cidade" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bairro"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Bairro" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rua"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormControl>
                            <Input placeholder="Rua" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="numero"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Numero"
                              {...field}
                              icon={Binary}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="complemento"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Complemento" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pontoDeRefefencia"
                      render={({ field }) => (
                        <FormItem className="col-span-4">
                          <FormControl>
                            <Textarea
                              placeholder="Ponto de referencia"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="perfil">
                <Card className="w-full border-none shadow-none">
                  <CardHeader>
                    <CardTitle>
                      <User2 />
                      2. Configurar perfil
                    </CardTitle>
                    <CardDescription>
                      Configure como seu perfil irá aparacer para seus clientes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="w-full grid grid-cols-4 gap-4">
                    <TitleBox
                      title="Dados visuais"
                      icon={Eye}
                      className="col-span-4 mb-0 mt-6"
                    />
                    <FormField
                      control={form.control}
                      name="nomeDoPerfil"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nome do perfil" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="corDoPerfil"
                      render={() => (
                        <FormItem>
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={'inputStyle'}
                                  className="gap-2"
                                >
                                  <Input
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    placeholder="Cor do perfil"
                                    icon={Paintbrush}
                                  />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="mt-2 flex flex-col justify-center items-center"
                                align="start"
                              >
                                <HexColorPicker
                                  color={color}
                                  onChange={setColor}
                                />
                              </PopoverContent>
                            </Popover>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="descricaoDoPerfil"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormControl>
                            <Input
                              placeholder="Descrição do perfil"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <TitleBox
                      title="Dados perfil"
                      icon={Database}
                      className="col-span-4 mb-0 mt-6"
                    />

                    <FormField
                      control={form.control}
                      name="usuario"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Usuário"
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
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Telefone empresa"
                              {...field}
                              icon={Phone}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <TitleBox
                      title="Dados de login"
                      icon={LogIn}
                      className="col-span-4 mb-0 mt-6"
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              type="email"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Input placeholder="Confirmar email" type="email" />

                    <FormField
                      control={form.control}
                      name="senha"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Senha"
                              {...field}
                              type="password"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Input placeholder="Confirmar senha" type="password" />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="plano">
                <Card className="w-full border-none shadow-none">
                  <CardHeader>
                    <CardTitle>
                      <LayoutGrid />
                      3. Selecionar plano
                    </CardTitle>
                    <CardDescription>
                      Preencha seu plano e sua forma de pagamento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="w-full grid grid-cols-4 gap-4">
                    <TitleBox
                      title="Selecionar plano"
                      icon={Shield}
                      className="col-span-4 mb-0 mt-6"
                    />
                    <FormField
                      control={form.control}
                      name="plano"
                      render={({ field }) => (
                        <FormItem className="flex justify-center items-center gap-2">
                          <FormControl>
                            <Input
                              hasIcon={false}
                              placeholder="Plano"
                              {...field}
                              beforeElement={<ChevronDown />}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <TitleBox
                      title="Selecionar pagamento"
                      icon={CreditCard}
                      className="col-span-4 mb-0 mt-6"
                    />
                    <FormField
                      control={form.control}
                      name="numeroCartao"
                      render={({ field }) => (
                        <FormItem className="flex justify-center items-center gap-2">
                          <FormControl>
                            <Input
                              icon={Binary}
                              placeholder="Numero do cartão"
                              {...field}
                              beforeElement={
                                <CardFlag
                                  numeroCartao={form.getValues('numeroCartao')}
                                />
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nomeCartao"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nome no cartão" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input icon={Binary} placeholder="CVV" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vencimento"
                      render={({}) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              icon={CalendarIcon}
                              placeholder="Vencimento"
                              value={vencimento}
                              onChange={handleInputChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <TitleBox
                      title="Leia os termos"
                      icon={Text}
                      className="col-span-4 mb-0 mt-6"
                    />
                    <Label className="flex gap-2 items-center col-span-4">
                      <Checkbox />
                      Declaro que li e estou ciente com os termos da TimeAlign.
                    </Label>
                    <Label className="flex gap-2 items-center col-span-4">
                      <Checkbox />
                      Declaro que estou de acordo com a forma de pagamento e
                      desejo prosseguir com meu cadastro.
                    </Label>

                    <Button className="ml-auto col-span-4" variant={'default'}>
                      <Rocket />
                      Cadastrar
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Registrar
