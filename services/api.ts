'use client'
import axios from 'axios'
import { parseCookies } from 'nookies'

const restApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
restApi.interceptors.request.use((config) => {
  const { 'nextauth.token': Token } = parseCookies()
  if (config.headers) config.headers.Authorization = `Bearer ${Token}`
  return config
})

export { restApi }
