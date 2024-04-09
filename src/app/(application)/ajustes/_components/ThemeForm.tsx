'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  FormField,
  FormLabel,
  FormDescription,
  FormMessage,
  FormControl,
  Form,
  FormItem,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { PenLine } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const appearanceFormSchema = z.object({
  theme: z.enum(['light', 'dark'], {
    required_error: 'Please select a theme.',
  }),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

const defaultValues: Partial<AppearanceFormValues> = {
  theme: 'light',
}

export default function ThemeForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: AppearanceFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Card className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Temas</FormLabel>
                <FormDescription>
                  Selecione como o sistema aparecerá para você.
                </FormDescription>
                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid max-w-md sm:grid-cols-2 gap-8 pt-2"
                >
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-neutral-700 dark:[&:has([data-state=checked])>div]:border-neutral-200">
                      <FormControl>
                        <RadioGroupItem value="light" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-neutral-300 dark:border-neutral-800 p-1 hover:border-neutral-400 dark:hover:border-neutral-700 cursor-pointer">
                        <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                          <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                            <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                          </div>
                        </div>
                      </div>
                      <span className="block w-full p-2 text-center font-normal">
                        Claro
                      </span>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-neutral-700 dark:[&:has([data-state=checked])>div]:border-neutral-200">
                      <FormControl>
                        <RadioGroupItem value="dark" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-neutral-300 dark:border-neutral-800 bg-popover p-1 hover:border-neutral-400 dark:hover:border-neutral-700 cursor-pointer">
                        <div className="space-y-2 rounded-sm bg-neutral-950 p-2">
                          <div className="space-y-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                            <div className="h-2 w-[80px] rounded-lg bg-neutral-400" />
                            <div className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-neutral-400" />
                            <div className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-neutral-400" />
                            <div className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                          </div>
                        </div>
                      </div>
                      <span className="block w-full p-2 text-center font-normal">
                        Escuro
                      </span>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormItem>
            )}
          />

          <Button className="sm:ml-auto">
            <PenLine size={16} /> Salvar dados
          </Button>
        </form>
      </Form>
    </Card>
  )
}
