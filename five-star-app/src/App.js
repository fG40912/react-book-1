import React from "react";
import StarRating from "./StarRating";

function App() {
    return (
		<>
			<h1>Hello World</h1>
			<StarRating style={{ backgroundColor: "lightblue" }} onDoubleClick={e => alert("Prevent Double Click")}/>
		</>
    );
}

export default App;
