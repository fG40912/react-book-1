import React from 'react'

export default function Recipes({name,ingredients,instructions}){
    return(
        <section id="baked-salmon">
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                {instructions.map((instruction, i) => (
                <p key={i}>{instruction}</p>
                ))}
            </section>
        </section>
    )
}