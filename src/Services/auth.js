import api from './serviceConfig'

export async function login(loginData) {
  const response = await api.post('/user/login', loginData)
  return response
}

export async function signUp(signUpData) {
  const response = await api.post('/user/signUp', signUpData)
  return response
}