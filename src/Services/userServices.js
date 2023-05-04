import api from "./serviceConfig";

async function addRecipeMenuPlanner (){
    const result = await api.post('/menuplanner',
    {
        headers: {
            token: localStorage.getItem('token')
        }
    })
   return result.data
}

async function getProfile () {
    const result = await api.get('/user/me',
    {
        headers: {
            token: localStorage.getItem('token')
        }
    })
    console.log(result)
   return result.data
}
export {
    addRecipeMenuPlanner,
    getProfile
}
