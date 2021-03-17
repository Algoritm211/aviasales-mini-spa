import axios from 'axios'

export const instanceAxios = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/'
})
