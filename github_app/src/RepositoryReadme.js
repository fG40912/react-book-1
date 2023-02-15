import {useState, useEffect, useCallback, useReducer} from "react"
import ReactMarkdown from "react-markdown"

export default function RepositoryReadme({login, repo}){
    const [loading, setLoading] = useReducer((loading) => !loading, false)
    const [error, setError] = useState()
    const [markdown, setMarkdown] = useState("")

    const loadReadme = useCallback(async (login, repo) => {
            setLoading()
            const url = `https://api.github.com/repos/${login}/${repo}/readme`
            const { download_url } = await fetch(url).then(res => res.json())
            const markdown = await fetch(download_url).then(res => res.text())

            setMarkdown(markdown)
            setLoading()
        },[]
    )

    useEffect(
        () => {
            if(!repo||!login) return
            loadReadme(login,repo).catch(setError)
        },[repo]
    )

    if(loading) return <p>Loading...</p>
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if(markdown) return <ReactMarkdown children={markdown}/>
    return null
}