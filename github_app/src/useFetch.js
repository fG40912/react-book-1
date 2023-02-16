import { useState, useReducer, useEffect } from "react"

export function useFetch(url){
    const [data, setData] = useState()
    const [loading, setLoading] = useReducer((loading) => !loading,false)
    const [error, setError] = useState()

    useEffect(
        () => {
            setLoading()
            if(!url) return
            fetch(url).then(response => response.json()).then(setData).then(setLoading).catch(setError)
        },[url]
    )

    return {
        data,
        loading,
        error
    } 
}