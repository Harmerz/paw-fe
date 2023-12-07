'use client'

import { useQuery } from '@tanstack/react-query'

import { useAccessToken } from '@/hooks/auth'
import { axios } from '@/lib/axios'

export const useGetOrder = () => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const res = await axios.get('/orders', {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    refetchInterval: 5 * 1000, // 5 seconds
    enabled: !!accessToken,
  })
}

export const useGetOneOrder = (id) => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['order', id],
    queryFn: async () => {
      const res = await axios.get(`/orders/${id}`, {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken && !!id,
  })
}

const exportedFunctions = { useGetOneOrder, useGetOrder }

export default exportedFunctions
