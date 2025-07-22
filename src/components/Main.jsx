import React from "react"
import IngredientsList from "./IngredientsList";
import ClaudeRecipeShown from "./ClaudeRecipeShown"
import { getRecipeFromMistral } from "../ai"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(previtem=>[...previtem, newIngredient]);
    }
    return (
        <main>
            <form action={addIngredient}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
                <button className="add-ingredient-button">+ Add ingredient</button>
            </form>
            { ingredients.length > 0 && <IngredientsList
            ingredients={ingredients}
            getrecipe={getRecipe}/>}
            {recipe && <ClaudeRecipeShown recipe={recipe}/>}
        </main>
    )
}