import React from 'react'
import Color from './Color'

export default function ColorList({colors=[]}) {
    if(!colors.length) return <div>No Colors Listed.</div>
    return (
        colors.map((color,i) => <Color key={color.id} {...color}/>)
    )
}
