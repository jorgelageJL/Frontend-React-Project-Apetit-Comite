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

   return result.data
}

async function deleteProfile () {
    const result = await api.delete('/user/me',
    {
        headers: {
            token: localStorage.getItem('token')
        }
    })

   return result.data
}

async function updateProfile (profileData) {
    const result = await api.put('/user/me', profileData,
    {
        headers: {
            token: localStorage.getItem('token')
        }
    })
  
   return result.data
}


export {
    addRecipeMenuPlanner,
    getProfile,
    deleteProfile,
    updateProfile
}
