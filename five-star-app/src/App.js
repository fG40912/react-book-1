import React, { useState } from "react";
import colorData from "./color-data.json"
import ColorList from "./ColorList"
import AddColorForm from "./AddColorForm"
import { v4 } from "uuid"

function App() {
	const [colors, setColors] = useState(colorData)

	function handleRemove(id){
		const newColors = colors.filter(color => color.id!==id)
		setColors(newColors)
	}

	function handleRating(id,rating){
		const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
		setColors(newColors)
	}

	function handleNewColor(title,color){
		const newColors = [...colors,{id:v4(),rating:0,title,color}]
		setColors(newColors)
	}

    return (
		<>
			<h1>Hello World</h1>
			<AddColorForm onNewColor={handleNewColor}/>
			<ColorList colors={colors} onRemove={handleRemove} onRateColor={handleRating}/>
		</>
    );
}

export default App;
