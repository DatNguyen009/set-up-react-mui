import { IAuthResponse } from '@/types/auth.type'
import { IResponse } from '@/types/response.type'
import { endpoints } from './endpoints'
import httpClient from './httpClient'

const login = (): Promise<IResponse<IAuthResponse>> => {
  return httpClient.post(endpoints.signin, { AgentAccount: 'master', AgentPassword: '1111' })
}

export const AuthService = { login }
