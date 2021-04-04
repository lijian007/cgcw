import axios from 'axios'
const API_BASE = '/api'

axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: API_BASE
})

export async function api_login (params: { email: string, password: string }) {
  console.log('login url:' + `${API_BASE}/login`)
  const response = await instance.post('/login', params)
  console.log(params)
  return response
}

export async function api_logout () {
  const response = await instance.post('/logout', {})
  return response
}
