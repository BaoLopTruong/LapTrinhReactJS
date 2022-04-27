import {useState, useEffect} from 'react';
export default function EffectDemo(){

    const [count, setCount] = useState(0);

    useEffect(() => {
       if(count===10){
           console.log("Reset count =0")
           setCount(0);
       }
    }, [count]);
    return(
        <div>
        <h1>Trien khai useEffect</h1>
            <h3>{count}</h3>
            <button onClick={(e) =>{setCount(count + 1)}}>Click Me</button>
        </div>
    )
}