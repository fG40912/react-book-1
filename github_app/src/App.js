import React, { useEffect, useState } from "react";

const saveJSON = (key, data) => {
	localStorage.setItem(key,JSON.stringify(data))
}

const loadJSON = key => {
	return key && JSON.parse(localStorage.getItem(key))
}

function GithubUser({ login }){
	const [data, setData] = useState(loadJSON(`user:${login}`))
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

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
			setLoading(true)
			if(data && data.login === login){
				setLoading(false)
				return
			}	// complain about data.login cannot be accessed
			else{
				fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(setData).then(() => setLoading(false)).catch(setError)
			}
		},[login]
	)
	
	if(loading) return(<h1>Loading ...</h1>)
	else if(error) return(<pre>{ JSON.stringify(error, null, 2) }</pre>)
	else if(!data) return(null)
	else return(
		<div className="githubUser">
			<img src={ data.avatar_url } alt={ data.login } style={{ width:200 }}/>
			<div>
				<h1>{ data.login }</h1>
				<p>{ data.name }</p>
				<p>{ data.location }</p> 
			</div>
		</div>
	)
}

function App() {
	return (
		<GithubUser login={ "moonhighway" }/>
	);
}

export default App;
