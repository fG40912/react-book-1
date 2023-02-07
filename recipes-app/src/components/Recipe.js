import React from 'react'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'

export default function Recipe({name,ingredients,steps}){
    return(
        <section id={name.toLowerCase().replace(/ /g,"-")}>
            <h1>{name}</h1>
            <IngredientsList {...ingredients}/>
            <InstructionsList instructions={steps}/>
        </section>
    )
}