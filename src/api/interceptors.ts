import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { JwtVerification } from '../utils/jwt_verification'
import TokenServices from './token.service'

var numberOfPendingCallAPI = 0

const ApiClient = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  /** Axios Request */
  instance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const accessToken = TokenServices.getLocalAccessToken()
      if (accessToken) {
        config.headers!['Authorization'] = 'Bearer ' + accessToken
      }

      /** CONFIG LOADING EFFECT */
      numberOfPendingCallAPI += 1
      // if (config?.loading !== false) {
      //   store.dispatch(setIsLoading(true));
      // }

      return config
    },
    (error: AxiosError) => {
      console.log('axios use() return error', error)
      return Promise.reject(error)
    }
  )

  /** Axios Response */
  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      /** CONFIG LOADING EFFECT */
      numberOfPendingCallAPI -= 1
      // if (numberOfPendingCallAPI === 0) {
      //   store.dispatch(setIsLoading(false));
      // }

      return response
    },
    (error: AxiosError) => {
      /** CONFIG LOADING EFFECT */
      numberOfPendingCallAPI -= 1
      // if (numberOfPendingCallAPI === 0) {
      //   store.dispatch(setIsLoading(false));
      // }

      const refreshToken = TokenServices.getLocalRefreshToken()
      // caseError: Access Token was expired

      return error
    }
  )

  return instance
}

export default ApiClient
