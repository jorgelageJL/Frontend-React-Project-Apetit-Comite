import api from "./serviceConfig"

export async function getMenuPlanner() {
    const result = await api.get(`user/me/menuPlanner`,
    {
        headers: {
            token: localStorage.getItem('token')
        }
    })
    return result.data
}

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

export async function getRecipeSpecial() {
    const result = await api.get(`user/me/userRecipe`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data
}

export async function deleteRecipeMenuPlanner(id) {  
    const result = await api.delete(`user/me/menuPlanner/${id}`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data
}