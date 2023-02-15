import React,{useState} from "react"
import GithubUser from "./GithubUser";

function App() {
	const [login, setLogin] = useState("moontahoe")

	return (
		<GithubUser login={login}/>
	);
}

export default App;
