import React from "react";
import {FaStar} from "react-icons/fa"

export default function Star({selected=false,onSelect= f => f, onDoubleClick}){
    return(
        <FaStar color={selected ? "yellow" : "grey"} onClick={onSelect} onDoubleClick={onDoubleClick}/>
    )
}