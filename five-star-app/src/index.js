import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import colorsData from "./color-data.json"

export const ColorContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ColorContext.Provider value={colorsData}>
			<App />
		</ColorContext.Provider>
	</React.StrictMode>
);