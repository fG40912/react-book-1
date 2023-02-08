import React, { useState } from "react";
import Star from "./Star"

const createArray = length => [...Array(length)]

export default function StarRating({totalLength=5,style, ...props}){
    const [selectedStars, setSelectedStars] = useState(0)

    return(
        <div style={{padding: 5, ...style}}>
            {createArray(totalLength).map((n,i) => <Star key={i} selected={selectedStars > i} onSelect={()=>setSelectedStars(i+1)} {...props}/>)}
            <p>{selectedStars} out of {totalLength}</p>
        </div>
    )
}