import React, { useEffect, useState } from "react";

const saveJSON = (key, data) => {
	localStorage.setItem(key,JSON.stringify(data))
}

const loadJSON = key => {
	return key && JSON.parse(localStorage.getItem(key))
}

function GithubUser({ login }){
	const [data, setData] = useState(loadJSON(`user:${login}`))

	useEffect(
		() => {
			if(!data) return
			if(data.login === login) return

			const { name, avatar_url, location } = data
			saveJSON(`user:${login}`,
				{
					name,
					login,
					avatar_url,
					location
				}
			)
		},[data]
	)

	useEffect(
		() => {
			if(!login) return
			if(data && data.login === login) return	// complain about data.login cannot be accessed
			else{
				fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(setData).catch(console.error)
			}
		},[login]
	)

	if(data) return(<pre>{ JSON.stringify(data) }</pre>)
	else return null
}

function App() {
	return (
		<GithubUser login={ "moonhighway" }/>
	);
}

export default App;
