import React, { useState } from "react";
import colorData from "./color-data.json"
import ColorList from "./ColorList"

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

    return (
		<>
			<h1>Hello World</h1>
			<ColorList colors={colors} onRemove={handleRemove} onRateColor={handleRating}/>
		</>
    );
}

export default App;
