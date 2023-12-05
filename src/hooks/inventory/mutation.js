import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const usePostInventory = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['inventory'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      console.log(data)
      const res = await axios.post('/inventory', data, {
        headers,
      })
      return res?.data
    },
  })
}

export const useUpdateInventory = () => {
  const { accessToken, headers } = useAccessToken();

  return useApiMutation2({
    queryKey: ['inventory', 'update'],
    mutationFun: async (_, { id, data }) => {
      if (!accessToken) {
        return null;
      }
      console.log('id', id);
      const res = await axios.put(`/inventory/${id}`, data, {
        headers,
      })
      return res?.data;
    },
  })
}

export const useDeleteInvetory = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['inventory', 'delete'],
    mutationFun: async (_, id) => {
      if (!accessToken) {
        return null
      }
      console.log('id', id)
      const res = await axios.delete(`/inventory/${id}`, {
        headers,
      })
      return res?.data
    },
  })
}

export const useOCRQuestions = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/uploads', data, {
        'Content-Type': 'multipart/form-data',
        headers,
      })
      return res?.data
    },
  })
}

export default usePostInventory
