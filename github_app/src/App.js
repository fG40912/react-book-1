import React,{useState} from "react"
import GithubUser from "./GithubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";

function App() {
	const [login, setLogin] = useState("moonhighway")
	const [repo, setRepo] = useState("apollo-federation-workshop") // apollo-federation-workshop

	return (
		<>
			<GithubUser login={login}/>
			<UserRepositories login={login} selectedRepo={repo} onSelect={setRepo}/>
			<RepositoryReadme login={login} repo={repo}/>
		</>
	);
}

export default App;
