import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: 'https://api.bo.aa44.ru/api',
})

export default axiosConfig;