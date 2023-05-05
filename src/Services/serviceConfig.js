import axios from "axios"

const api = axios.create({
    baseURL: 'https://www.db4free.net'
    // withCredentials: false,
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    // }
})

export default api;