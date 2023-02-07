import React from "react";
import Recipe from "./Recipe";

export default function(recipes){
    return(
        <article>
            <header><h1>Delicious Recipes</h1></header>
            <div className="recipes">
                {recipes.map((recipe,index) => <Recipe key={index} {...recipe}/>)}
            </div>
        </article>
    )
}