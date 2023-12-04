'use client'

import { useQuery } from '@tanstack/react-query'

import { useAccessToken } from '@/hooks/auth'
import { axios } from '@/lib/axios'

export const useGetRecipe = () => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['recipe'],
    queryFn: async () => {
      const res = await axios.get('/recipe', {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken,
  })
}

export const useGetOneRecipe = (id) => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['recipe', id],
    queryFn: async () => {
      const res = await axios.get(`/recipe/${id}`, {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken && !!id,
  })
}

const exportedFunctions = { useGetOneRecipe, useGetRecipe }

export default exportedFunctions
