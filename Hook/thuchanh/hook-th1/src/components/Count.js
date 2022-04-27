import {useState} from 'react';

export default function Count(){

    const [count, setCount] = useState(0);

    let Plus = () =>{
        setCount(count +1);
    }

    let Div = () =>{
        setCount(count -1);
    }
  
    return(
        <div>
        <h1>Trien khai useState</h1>
            <h2>{count}</h2>
            <button onClick={Plus}>Click +</button>
            <button onClick={Div}>Click -</button>

        </div>
    )
}