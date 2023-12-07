import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

// fetch data with api
export const usePostDelivery = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['delivery'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/delivery', data, {
        headers,
      })
      return res?.data
    },
  })
}

export const useDeleteDelivery = () => {
  const { accessToken, headers } = useAccessToken()
  const deleteDeliveryMutation = useApiMutation2({
    queryKey: ['delivery', 'delete'],
    mutationFun: async (_, id) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.delete(`/delivery/${id}`, {
        headers,
      })
      return res?.data
    },
  })

  return deleteDeliveryMutation
}

export const usePutDelivery = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['delivery'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }

      const url = `/delivery/${data.id[0]}`

      try {
        const res = await axios.put(url, data?.data, {
          headers,
        })
        return res?.data
      } catch (error) {
        console.error('Error updating delivery order:', error)
        throw error
      }
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

export const useProcessQuestions = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/question-process', data, {
        headers,
      })
      return res
    },
  })
}

const exportedFunction = { usePostDelivery, useDeleteDelivery, usePutDelivery }

export default exportedFunction
