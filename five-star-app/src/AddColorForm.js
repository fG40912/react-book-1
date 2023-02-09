import React, {useState} from "react";

export default function AddColorForm({onNewColor=f=>f}){
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("#000000")

    const submit = e => {
        e.preventDefault()
        onNewColor(title,color)
        setTitle("")
        setColor("")
    }

    return(
        <form onSubmit={submit}>
            <input type="text" onChange={event => setTitle(event.target.value)} placeholder="color title ..." required/>
            <input type="color" onChange={event => setColor(event.target.value)} required/>
            <button>ADD</button>
        </form>
    )
}