'use client'

import { useQuery } from '@tanstack/react-query'

import { useAccessToken } from '@/hooks/auth'
import { axios } from '@/lib/axios'

export const useGetInventory = () => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['inventory'],
    queryFn: async () => {
      const res = await axios.get('/inventory', {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    refetchInterval: 5 * 1000, // 5 seconds
    enabled: !!accessToken,
  })
}

export default useGetInventory
