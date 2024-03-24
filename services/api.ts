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
  const { 'nextauth.token': token } = parseCookies()
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { restApi }
