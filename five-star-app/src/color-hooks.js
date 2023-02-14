import React, {createContext, useContext, useState} from "react";
import colorsData from "./color-data.json"
import { v4 } from "uuid"

const ColorContext = createContext()
export const useColors = () => useContext(ColorContext)

export default function ColorProvider({children}){
    const [colors,setColors] = useState(colorsData)

    const addColor = (title,color) =>{
        const newColors = [...colors,{id:v4(),rating:0,title,color}]
        setColors(newColors)
    }

    const rateColor = (id,rating) => {
        setColors(colors.map((color)=> {
            return (color.id === id ? { ...color, rating } : color)
        }))
    }

    const removeColor = (id) => {
        const newColors = colors.filter(color => color.id !== id)
        setColors(newColors)
    }

    return(
        <ColorContext.Provider value={{colors,addColor,rateColor,removeColor}}>
            {children}
        </ColorContext.Provider>
    )
}