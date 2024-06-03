import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

httpClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error?.response?.status === 401) {
      //logout
      window.location.replace(`${window.location.origin}/login`)
    }
    if (error?.response && error?.response?.data) {
      return Promise.reject(error?.response?.data)
    }

    return Promise.reject(error)
  }
)

export default httpClient
