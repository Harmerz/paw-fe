import { axios } from './axios'

// Function to refetch the access token when expired
export async function refreshAccessToken(refreshToken) {
  try {
    const result = await axios.post(
      '/auth/refresh-token',
      {},
      { headers: { Authorization: `Bearer ${refreshToken}` } },
    )
    const newAccessToken = result.data.accessToken
    return newAccessToken
  } catch (err) {
    return 'RefreshAccessTokenError'
  }
}

export default refreshAccessToken
