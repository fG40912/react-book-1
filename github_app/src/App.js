import React,{useState} from "react"
import GithubUser from "./GithubUser";

function App() {
	const [login, setLogin] = useState("eveporcello")

	return (
		<GithubUser login={login}/>
	);
}

export default App;
