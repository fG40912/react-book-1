import React from "react"
import Fetch from "./Fetch"

const saveJSON = (key, data) => {
	localStorage.setItem(key,JSON.stringify(data))
}

const loadJSON = key => {
	return key && JSON.parse(localStorage.getItem(key))
}

function UserDetails( data ){
	console.log("rendering UserDetails")
    return(
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

export default function GithubUser({login}){
    return(
        <Fetch uri={`https://api.github.com/users/${login}`} renderSuccess={UserDetails}/>
    )
}