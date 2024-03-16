import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AtSign, Facebook } from 'lucide-react'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <div className='w-full flex'>
      <div className='m-auto justify-center flex flex-col items-center w-2/3 gap-8'>
        <div className='flex flex-col w-full bg-system-darkness rounded-3xl p-20 gap-4'>
          <h1 className='text-system-50 font-bold text-4xl'>Fazer login</h1>
          <Input placeholder='Insira seu usuario' icon={AtSign} />
          <Input placeholder='Insira sua senha' type='password' />
          <Button
            variant={'link'}
            className='ml-auto text-system-300'
            size={'slim'}
          >
            <Link href={'/'}> Esqueci minha senha.</Link>
          </Button>

          <Button className='bg-emerald-500 font-semibold hover:bg-emerald-600 active:bg-emerald-800 text-xl'>
            Logar
          </Button>
        </div>
        <div className='flex justify-between items-center w-full bg-system-darkness m-auto rounded-3xl gap-1 p-12'>
          <div>
            <h1 className='text-xl font-bold text-system-100'>
              Ainda nao possui conta?
            </h1>
            <Button
              variant={'link'}
              className='mr-auto text-system-300'
              size={'slim'}
            >
              <Link href={'/login/registrarempresa'}>Registre-se</Link>
            </Button>
          </div>
          <div
            className='flex justify-center gap-4
        '
          >
            <Button size={'icon'} className='text-xl rounded-full'>
              G
            </Button>
            <Button size={'icon'} className='text-xl rounded-full'>
              <Facebook />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
