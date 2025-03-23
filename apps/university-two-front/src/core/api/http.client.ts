import axios, { type AxiosError } from 'axios'
import {
  BaseApiException,
  type BaseApiExceptionResponse,
} from '@/core/exceptions/base-api.exception'

const httpClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const baseApiExceptionResponseInterceptor = (
  error: AxiosError<BaseApiExceptionResponse>,
) => {
  const apiError: BaseApiException = BaseApiException.fromAxiosError(error)
  return Promise.reject(apiError)
}

httpClient.interceptors.request.use((response) => response, baseApiExceptionResponseInterceptor)

export default httpClient
