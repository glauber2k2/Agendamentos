import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen bg-system-darkness flex items-center justify-center gap-10">
      <img src="/sentadoRelogio.png" />
      <div className="flex flex-col items-center justify-center font-semibold text-4xl gap-8">
        404 - Pagina não encontrada.
        <Link href={'/'}>
          <Button variant={'ghost'}>
            <Home /> Voltar para home
          </Button>
        </Link>
      </div>
    </div>
  )
}
