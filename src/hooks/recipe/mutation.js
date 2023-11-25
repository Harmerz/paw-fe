import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const usePostRecipe = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['recipe'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      console.log(data)
      const res = await axios.post('/recipe', data, {
        headers,
      })
      return res?.data
    },
  })
}

export const useDeleteRecipe = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['recipe', 'delete'],
    mutationFun: async (_, id) => {
      if (!accessToken) {
        return null
      }
      console.log('id', id)
      const res = await axios.delete(`/recipe/${id}`, {
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

export default usePostRecipe
