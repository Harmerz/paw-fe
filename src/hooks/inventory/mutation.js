import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const useQuestions = () => {
  const { accessToken, headers } = useAccessToken()

  const createQuestion = useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/question', data, {
        headers,
      })
      return res?.data
    },
  })

  const updateQuestion = useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (questionId, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.put(`/api/question/${questionId}`, data, {
        headers,
      })
      return res?.data
    },
  })

  const deleteQuestion = useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (questionId) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.delete(`/api/question/${questionId}`, {
        headers,
      })
      return res?.data
    },
  })

  const readQuestions = useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async () => {
      if (!accessToken) {
        return null
      }
      const res = await axios.get('/api/questions', {
        headers,
      })
      return res?.data
    },
  })

  return {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    readQuestions,
  }
}

export default useQuestions
