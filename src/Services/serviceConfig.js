import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
    // withCredentials: false,
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    // }
})

export default api;