import React from 'react';
import ReactDOM from 'react-dom/client';
import ColorProvider from './color-hooks';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ColorProvider>
			<App/>
		</ColorProvider>
	</React.StrictMode>
);