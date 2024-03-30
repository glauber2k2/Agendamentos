import { cookies } from 'next/headers'

export async function getSession() {
  const session = cookies().get('nextauth.user')?.value
  if (!session) return null
  return await JSON.parse(session)
}

export async function logout() {
  console.log('teste')
  cookies().set('nextauth.user', '', { expires: new Date(0) })
  cookies().set('nextauth.token', '', { expires: new Date(0) })
}

export async function login(formData: FormData) {
  try {
    // Convertendo FormData para JSON
    const formDataObj = Object.fromEntries(formData.entries())
    const response = await fetch('https://api-agendamentos.onrender.com/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObj),
    })

    if (!response.ok) {
      throw new Error('Falha na autenticação')
    }

    // Extrair os dados da resposta
    const data = await response.json()
    const { user, token } = data

    // Configurar a data de expiração
    const expires = new Date(Date.now() + 10 * 1000) // Ajuste conforme necessário

    // Salvar os dados recebidos nos cookies
    cookies().set('nextauth.user', JSON.stringify(user), {
      expires,
      httpOnly: true,
    })
    cookies().set('nextauth.token', token, { expires, httpOnly: true })
  } catch (error) {
    console.error('Erro ao logar:', error)
    throw error // Lançar o erro novamente para ser tratado por quem chama a função
  }
}
