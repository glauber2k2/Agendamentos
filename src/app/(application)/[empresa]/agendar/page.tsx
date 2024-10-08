'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function Agendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  //variaveis temporarias
  const items = Array.from({ length: 25 }, (_, index) => index + 1)
  const disabledDays = [
    new Date(2023, 10, 12),
    new Date(2023, 10, 20),
    { from: new Date(2023, 4, 18), to: new Date(2023, 4, 29) },
  ]
  return (
    <div className="flex flex-col w-full h-full p-8">
      <Form {...form}>
        <form
          className="grid md:grid-cols-2 w-full gap-4"
          id="formulariodeagendamento"
        >
          <Card className=" px-4 md:px-8 py-8 flex flex-col ">
            <CardTitle>Escolha o Profissional</CardTitle>
            <CardDescription>
              clique no profissional de sua escolha.
            </CardDescription>
            <CardContent className="mt-8 p-2 ">
              <ScrollArea className="h-96 ">
                <ToggleGroup
                  type="single"
                  className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center "
                >
                  {items.map((item) => (
                    <ToggleGroupItem
                      key={item}
                      value={item.toString()}
                      className="flex w-full h-full p-1 group"
                    >
                      <HoverCard>
                        <HoverCardTrigger className="w-full h-full rounded-lg overflow-hidden">
                          <img
                            className="flex object-cover w-full h-full group-data-[state=on]:animate-pulse"
                            src="https://media.jornaldooeste.com.br/2023/04/bbe17fee-imagem-do-whatsapp-de-2023-04-11-as-17.02.51.jpg"
                            alt={`Image ${item}`}
                          />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 text-neutral-600">
                          <div className="flex justify-between">
                            <Avatar>
                              <AvatarImage src="https://media.jornaldooeste.com.br/2023/04/bbe17fee-imagem-do-whatsapp-de-2023-04-11-as-17.02.51.jpg" />
                              <AvatarFallback>CE</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col justify-start">
                              <h4 className="text-sm text-start font-semibold">
                                Carlos Eduardo
                              </h4>
                              <p className="text-sm">
                                Especialista em cabelo e Barba.
                              </p>
                              <div className="flex items-center pt-2">
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs">
                                  Desde Dezembro 2021
                                </span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="md:px-8 py-8 px-4 flex flex-col">
            <CardTitle>Preencha o agendamento</CardTitle>
            <CardDescription>
              Preencha os campos de agendamento.
            </CardDescription>
            <CardContent className="w-full xl:grid-cols-2 grid mt-4 gap-4 p-0 sm:p-6">
              <Calendar
                fixedWeeks
                disabled={disabledDays}
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border dark:border-neutral-950 col-span-1 flex justify-center min-h-[350px] items-start"
              />
              <Card className="p-4 flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={() => (
                    <FormItem className="space-y-2">
                      <FormLabel>Unidade de Atendimento:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Bancarios</SelectItem>
                            <SelectItem value="dark">Manaira</SelectItem>
                            <SelectItem value="system">Geisel</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={() => (
                    <FormItem className="space-y-2">
                      <FormLabel>Tipo serviço:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Cabelo</SelectItem>
                            <SelectItem value="dark">Cabelo e Barba</SelectItem>
                            <SelectItem value="system">Hidratação</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={() => (
                    <FormItem className="space-y-2">
                      <FormLabel>Horario:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">7:00</SelectItem>
                            <SelectItem value="dark">7:30</SelectItem>
                            <SelectItem value="system">8:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}

export default Agendar
