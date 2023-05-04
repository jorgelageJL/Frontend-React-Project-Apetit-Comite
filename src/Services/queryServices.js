import api from `./serviceConfig`

export async function getResource(resource) {
    const apiResponse = await api.get(`/${resource}`,
    {
        headers: {
            token: localStorage.getItem('token')
        }
    })
    return apiResponse
}