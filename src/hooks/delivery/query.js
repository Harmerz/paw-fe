'use client'

import { useQuery } from '@tanstack/react-query'

import { useAccessToken } from '@/hooks/auth'
import { axios } from '@/lib/axios'

export const useGetDelivery = () => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['delivery'],
    queryFn: async () => {
      const res = await axios.get('/delivery', {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken,
  })
}

export const useGetDeliveryById = (id) => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['delivery', id],
    queryFn: async () => {
      const res = await axios.get(`/delivery/${id}`, {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken && !!id,
  })
}

const exportedFunction = { useGetDeliveryById, useGetDelivery }

export default exportedFunction
