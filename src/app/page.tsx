import TopBar from '@/components/layout/Topbar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Badge,
  BadgeCheck,
  BadgePlus,
  Calendar,
  CalendarIcon,
  Clock,
  CloudLightningIcon,
  Coins,
  Gift,
  Paintbrush,
  PlusCircleIcon,
  Rocket,
  User2,
} from 'lucide-react'

async function Home() {
  return (
    <div className="w-full h-svh flex flex-col">
      <TopBar />
      <div className="p-6 md:p-12 flex flex-col gap-20">
        <div className="flex h-full justify-center md:items-center flex-col md:flex-row md: gap-10">
          <div className="flex justify-center items-center">
            <img src="/mulherAtrasada.png" />
          </div>
          <div className="md:p-16 md:w-1/2">
            <h1 className="text-2xl sm:text-4xl font-bold flex items-center gap-4 ">
              <Clock size={32} className="hidden xl:block shrink-0" />
              Evite a correria dos atendimentos!
            </h1>
            <h3 className="font-bold text-xl text-neutral-600">
              Tenha seus atendimentos todos organizados
            </h3>
            <p className="mt-10">
              Com um sistema de agendamentos e gerenciamento de atendimentos
              como o da TimeAlign, você ficaria totalmente no controle de seus
              atendimentos, com nosso aplicativo na palma da sua mão ou
              acessando nosso sistema web.
            </p>

            <p className="mt-4">
              Cada vez mais as pessoas optam por usar a internet para fazer
              compras e resolverem seus problemas, por que não aproveitar isso
              para deixar seu negocio mais interessante aos olhos dos clientes?
            </p>
          </div>
        </div>
        <div className="h-full gap-8 flex-col md:flex-row grid xl:grid-cols-3">
          <Card className="flex flex-col p-4 bg-neutral-200 dark:bg-neutral-950 ">
            <CardHeader>
              <CardTitle>
                Sou cliente
                <Button className=" flex items-center ml-auto bg-emerald-500 text-emerald-50 hover:bg-emerald-400/90 gap-2">
                  <User2 />
                  Entre grátis
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="gap-2 h-full grid grid-rows-3">
              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <Calendar /> Agende onde e quando quiser.
                  </CardTitle>
                  <CardDescription>
                    Tenha a liberdade de agendar seu atendimento, na sua empresa
                    favorita, com seu profissional favorito e na unidade mais
                    perto da sua casa.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <Coins /> Acomule pontos!
                  </CardTitle>
                  <CardDescription>
                    A cada atendimento concluído, a empresa pode te recompensar
                    com pontos de fidelidade para voce conseguir trocar por
                    diversos nos próximos atendimentos.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <Gift /> Obtenha prêmios!
                  </CardTitle>
                  <CardDescription>
                    Voce pode trocar seus pontos obtidos por diversos prêmios
                    cadastrados na empresa, como brindes, cupons de desconto,
                    atendimentos gratis e muito mais...
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardContent>
          </Card>
          <Card className="p-4 bg-neutral-200 dark:bg-neutral-950 ">
            <CardHeader>
              <CardTitle>Plano empresa</CardTitle>
              <CardDescription>
                Voce que é empreendedor e quer dar um up! no seus atendimentos,
                confira nosso planos empresariais.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-rows-3 gap-2">
              <HoverCard>
                <HoverCardTrigger className="select-none cursor-pointer">
                  <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200 hover:bg-black/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>
                        <Badge /> Assinatura Básica
                      </CardTitle>
                      <CardDescription>
                        Apenas R$300 reais mensais nos 3 primeiros meses, e
                        acesso ao sistema de agendamento.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-80">
                  <div className="flex justify-between gap-4">
                    <Badge size={44} className="text-violet-500" />
                    <div className="flex flex-col w-full">
                      <h4 className="text-sm font-semibold underline">
                        Assinatura Básica
                      </h4>
                      <ul>
                        <li>1. Sistema agendamentos</li>
                        <li>2. Personalizar empresa</li>
                        <li>3. Acesso a 1 unidade.</li>
                      </ul>
                      <div className="flex items-center pt-2 text-neutral-400">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span className="text-xs ">
                          R$500 após o terceiro mês.
                        </span>
                      </div>
                      <Button className="mt-4 ml-auto">Assinar</Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger className="select-none cursor-pointer">
                  <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200 hover:bg-black/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>
                        <BadgePlus /> Assinatura Plus+
                      </CardTitle>
                      <CardDescription>
                        Apenas R$500 reais mensais nos 3 primeiros meses, e
                        acesso a todas funções do sistema.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-80">
                  <div className="flex justify-between gap-4">
                    <BadgePlus size={44} className="text-violet-500" />
                    <div className="flex flex-col w-full">
                      <h4 className="text-sm font-semibold underline">
                        Assinatura Plus+
                      </h4>
                      <ul>
                        <li>1. Sistema agendamentos</li>
                        <li>2. Personalizar empresa</li>
                        <li>3. Acesso a 1 unidade.</li>
                        <li>4. Sistema de pontos.</li>
                        <li>5. Sistema de prêmios.</li>
                      </ul>
                      <div className="flex items-center pt-2 text-neutral-400">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span className="text-xs ">
                          R$700 após o terceiro mês.
                        </span>
                      </div>
                      <Button className="mt-4 ml-auto">Assinar</Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger className="select-none cursor-pointer">
                  <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200 hover:bg-black/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>
                        <BadgeCheck /> Assinatura Tripla
                      </CardTitle>
                      <CardDescription>
                        Apenas R$700 reais mensais nos 3 primeiros meses, e
                        acesso a todas funções do sistema.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-80">
                  <div className="flex justify-between gap-4">
                    <BadgeCheck size={44} className="text-violet-500" />
                    <div className="flex flex-col w-full">
                      <h4 className="text-sm font-semibold underline">
                        Assinatura Tripla
                      </h4>
                      <ul>
                        <li>1. Sistema agendamentos</li>
                        <li>2. Personalizar empresa</li>
                        <li>3. Acesso a 3 unidade.</li>
                        <li>4. Sistema de pontos.</li>
                        <li>5. Sistema de prêmios.</li>
                      </ul>
                      <div className="flex items-center pt-2 text-neutral-400">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span className="text-xs ">
                          R$900 após o terceiro mês.
                        </span>
                      </div>
                      <Button className="mt-4 ml-auto">Assinar</Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
          <Card className="p-4  flex flex-col bg-neutral-200 dark:bg-neutral-950">
            <CardHeader>
              <CardTitle>Sou empreendedor</CardTitle>
              <CardDescription>
                Venha fazer parte dessa incrível maneira de automatizar seu
                atendimento e agendamentos.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-rows-4 h-full gap-2">
              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <Paintbrush /> Personalize sua empresa.
                  </CardTitle>
                  <CardDescription>
                    Deixe seu perfil empresarial com a cara da sua empresa, com
                    nosso sistema de personalização empresarial.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <Rocket /> Aumente seu faturamento.
                  </CardTitle>
                  <CardDescription className="flex flex-col h-full">
                    Aumente seu faturamento organizando com nosso sistema de
                    gerenciamento de agendamentos, e fidelize clientes com
                    pontuações.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <PlusCircleIcon /> Integre varias unidades.
                  </CardTitle>
                  <CardDescription className="flex flex-col h-full">
                    Como nosso sistema, você pode ter sua empresa com todas
                    unidades na palma da sua mão.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-neutral-300 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-200">
                <CardHeader>
                  <CardTitle>
                    <CloudLightningIcon /> Tenha velocidade
                  </CardTitle>
                  <CardDescription className="flex flex-col h-full">
                    Agilize o processo de agendamento do cliente, com apenas um
                    clique ele terá um agendamento com sua empresa.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
