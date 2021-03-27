import axios from 'axios'
const API_BASE= process.env.REACT_APP_API_URL


axios.defaults.withCredentials = true

console.log(process.env.REACT_APP_API_URL2)

const instance = axios.create({
    baseURL: API_BASE,
  });


  export async function api_login(params:{email:string,password:string}) {
    console.log("login url:"+`${API_BASE}/login`)
    const response = await instance.post(`${API_BASE}/login`, params)
    return response
  }

  export async function api_logout() {
    const response = await instance.post(`${API_BASE}/logout`, {})
    return response
  }