import { getResource } from `./QueryServices`;
const PATH = 'recipe'

// GET
export async function getAllRecipes() {
    return getResource(`${PATH}`)
}

export async function getRecipesWithIngredient(id) {
    return getResource(`${PATH}/ingredient/${id}`)
}

export async function getOneRecipe(id) {
    return getResource(`${PATH}/${id}`)
}

// POST


// PUT


// DELETE