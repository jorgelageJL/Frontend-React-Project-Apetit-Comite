
import api from './serviceConfig'

async function getAllRecipes() {
    const result = await api.get('/recipe',
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data

}

async function getRecipe(id) {
    const result = await api.get(`/recipe/${id}`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data

}

async function getRecipeByIngredient(id) {
    const result = await api.get(`/recipe/${id}/ingredient`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data
}

async function getOneRecipeByName(name) {
    const result = await api.post(`/recipe/getOneRecipeByName`,
    {
        headers: {
            token: localStorage.getItem('token'),
            name: name,
        }
    })
    console.log(result)
    return result.data
}

export {
    getAllRecipes,
    getRecipe,
    getRecipeByIngredient,
    getOneRecipeByName
}