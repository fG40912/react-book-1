import React from "react"

export default function({instructions}){
    <section className="instructions">
        <h2>Cooking Instructions</h2>
        {instructions.map((instruction,index) => <p key={index}>{instruction}</p>)}
    </section>
}