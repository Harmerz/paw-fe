import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const usePostOrder = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['order'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/order', data, {
        headers,
      })
      return res?.data
    },
  })
}

export const useDeleteOrder = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['order', 'delete'],
    mutationFun: async (_, id) => {
      if (!accessToken) {
        return null
      }
      console.log('id', id)
      const res = await axios.delete(`/order/${id}`, {
        headers,
      })
      return res?.data
    },
  })
}

export default usePostOrder
