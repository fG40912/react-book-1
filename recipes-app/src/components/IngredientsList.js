import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientsList({ingredients}) {
    return (
        <ul className='ingredients'>
            {ingredients.map((ingredient,index) => <Ingredient key={index} {...ingredient}/>)}
        </ul>
    )
}
