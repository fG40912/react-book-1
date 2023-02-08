import React, { useState } from "react";
import Star from "./Star"

const createArray = length => [...Array(length)]

export default function StarRating({totalLength=5, selectedStars=0}){
    return(
        <>
            {createArray(totalLength).map((n,i) => <Star key={i} selected={selectedStars > i}/>)}
            <p>{selectedStars} out of {totalLength}</p>
        </>
    )
}