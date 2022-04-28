import { useState } from "react";
export default function Hello(){

    const [input, setInput] = useState();

    return (
        <div style={{textAlign:"center"}}>
        <h1>Xu ly su kien voi onchange</h1>
           <input type={'text'} onChange={(e) =>{setInput(e.target.value); console.log(e.target.value)}}></input>
            
            <p>Hello: {input}</p>
        </div>
    )
}