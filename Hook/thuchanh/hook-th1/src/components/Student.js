import { useState, useEffect } from "react";
export default function Student(){
     const [count, setCount] = useState(0);

     useEffect(() => {
        if(count===10){
            setCount(0);
        }
     }, [count]);
     return(
         <div>
         <h1>Trien khai useState</h1>
             <h3>{count}</h3>
             <button onClick={(e) =>{setCount(count + 1)}}>Click Me</button>
         </div>
     )
}