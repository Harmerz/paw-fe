import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

// Create new order by hit the POST api, specifying the data, and require access token
export const usePostOrder = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['order'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/orders', data, {
        headers,
      })
      return res?.data
    },
  })
}

// Create new order by hit the PUT api, specifying the data & id,  and require access token
export const useUpdateOrder = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['order', 'update'],
    mutationFun: async (_, { id, data }) => {
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

// Delete order by hit DELETE api and specifying the id
export const useDeleteOrder = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['order', 'delete'],
    mutationFun: async (_, id) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.delete(`/orders/${id}`, {
        headers,
      })
      return res?.data
    },
  })
}

const exportedFunctions = { usePostOrder, useDeleteOrder, useUpdateOrder }

export default exportedFunctions
