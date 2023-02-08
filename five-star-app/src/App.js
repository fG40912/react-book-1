import React, { useState } from "react";
import colorData from "./color-data.json"
import ColorList from "./ColorList"

function App() {
	const [colors, setColors] = useState(colorData) 
    return (
		<>
			<h1>Hello World</h1>
			<ColorList colors={colors}/>
		</>
    );
}

export default App;
