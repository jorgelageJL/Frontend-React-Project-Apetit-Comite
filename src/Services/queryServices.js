import api from `./serviceConfig`

export async function getResource(path) {
    const apiResponse = await api.get(`/${path}`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return apiResponse
}

export async function postResource(path, resource) {
    const apiResponse = await api.post(`/${path}`,
        {
            resource,
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return apiResponse
}