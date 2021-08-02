import axios from 'axios'
export const request = axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8001'
})
request.interceptors.request.use(config =>{
 config.headers['X-Nideshop-Token'] = JSON.parse(localStorage.getItem('token'))
 return config
})
    
