import { useEffect } from "react"
import { useIterator } from "./useIterator"

export default function RepoMenu({repositories, onSelect=f=>f}){
    const [{name},prev,next] = useIterator(repositories)

    useEffect(
        () => {
            if(!name) return
            else onSelect(name)
        },
        [name]
    )

    return(
        <div style={{ display: "flex" }}>
            <button onClick={prev}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
        </div>
    )
}