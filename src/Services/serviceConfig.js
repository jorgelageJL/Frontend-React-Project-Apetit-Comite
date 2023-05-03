import axios from "axios"

const api = axios.create({
    baseURL: `http://localhost:3000/api`
    // withCredentials: false,
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    // }
})

// async function getQuery(query = '/recipe/'){
//     const { data } = await api.get(query)
//     // console.log("Data", data["data"])
//     console.log("Data", data)
//     return data.data
// }

export default api;