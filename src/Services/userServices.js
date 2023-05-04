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

export {
    addRecipeMenuPlanner
}
