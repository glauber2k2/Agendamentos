import { cookies } from 'next/headers'

export async function fetchServer(
  fetchUrl: RequestInfo | URL,
  fetchConfig?: RequestInit | undefined,
) {
  const token = cookies().get('nextauth.token')?.value
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${fetchUrl}`,

    {
      ...fetchConfig,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )

  const result = await data.json()
  return result
}
