import api from "./serviceConfig"

export async function addMenuPlanner(id, date) {
    const result = await api.post(`user/me/menuPlanner/${id}`,
        {
            date: date
        },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data
}