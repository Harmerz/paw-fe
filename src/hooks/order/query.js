'use client'

import { useQuery } from '@tanstack/react-query'

import { useAccessToken } from '@/hooks/auth'
import { axios } from '@/lib/axios'

export const useGetOrder = () => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const res = await axios.get('/order', {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken,
  })
}

export default useGetOrder
