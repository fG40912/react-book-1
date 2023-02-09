import React from "react";
import Star from "./Star"

const createArray = length => [...Array(length)]

export default function StarRating({totalLength=5, selectedStars=0, onRate= f=>f}){
    return(
        <>
            {createArray(totalLength).map((n,i) => <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i+1)}/>)}
            <p>{selectedStars} out of {totalLength}</p>
        </>
    )
}