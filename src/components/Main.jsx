import React from "react"
import IngredientsList from "./IngredientsList"
import { getRecipeFromLlama } from "../../ai.js"
import LlamaRecipe from "./LlamaRecipe.jsx"
export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => ([...prevIngredients, newIngredient]))
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromLlama(ingredients)
        console.log(recipeMarkdown)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <IngredientsList
                ingredients = {ingredients}
                getRecipe={getRecipe}
            /> : null}

            {recipe? <LlamaRecipe recipe={recipe}/> : null}
        </main>
    )
}