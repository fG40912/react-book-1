import React from 'react'
import { useColors } from "./color-hooks"
import Color from './Color'

export default function ColorList() {
    const { colors } = useColors()
    if(!colors.length) return <div>No Colors Listed.</div>
    return (
        <div className='color-list'>{colors.map((color,i) => <Color key={color.id} {...color}/>)}</div>
    )
}
