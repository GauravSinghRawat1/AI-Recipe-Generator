export default function IngredientsList(props){
    const ingredientsListItems = props.ingredients.map(ingredient=> (<li key={ingredient}>{ingredient}</li>));
    return(
        <section className="section1">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list">
            {ingredientsListItems}
        </ul>
        {props.ingredients.length > 3 && <div className="get-recipe-container">
            <div>
                <h3>
                    Ready for a recipe?
                </h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getrecipe}>Get a recipe</button>
        </div>}
    </section>
    )
}