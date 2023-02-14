import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const saveJSON = (key, data) => {
	localStorage.setItem(key,JSON.stringify(data))
}

const loadJSON = key => {
	return key && JSON.parse(localStorage.getItem(key))
}

function GithubUser({ login }){
	const { data, loading, error } = useFetch(`https://api.github.com/users/${login}`)
	
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
