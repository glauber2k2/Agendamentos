import { FunctionComponent, Suspense } from 'react'
import NovaSenha from './NovaSenha'

interface PageNovaSenhaProps {}

const PageNovaSenha: FunctionComponent<PageNovaSenhaProps> = () => {
  return (
    <Suspense>
      <NovaSenha />
    </Suspense>
  )
}

export default PageNovaSenha
