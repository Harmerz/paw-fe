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
      console.log(data)
      const res = await axios.post('/orders', data, {
        headers,
      })
      return res?.data
    },
  })
}

export const useUpdateOrder = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['order', 'update'],
    mutationFun: async (_, {id, data}) => {
      if (!accessToken) {
        return null
      }

      const url = `/orders/${id}`

      try {
        const res = await axios.put(url, data, {
          headers,
        })
        return res?.data
      } catch (error) {
        console.error('Error updating order:', error)
        throw error
      }
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
      const res = await axios.delete(`/orders/${id}`, {
        headers,
      })
      return res?.data
    },
  })
}

const exportedFunctions = { usePostOrder, useDeleteOrder, useUpdateOrder }

export default exportedFunctions
