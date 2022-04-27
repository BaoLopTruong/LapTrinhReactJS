import { useState } from "react";
export default function ClockHook(){

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const [mintues, setMintues] = useState('');
    const [seconds, setSeconds] = useState('');

    const updateTime = () =>{
        let now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth()+1);
        setDate(now.getDate());
        setHours(now.getHours());
        setMintues(now.getMinutes());
        setSeconds(now.getSeconds());
    
    }

    setInterval(() =>{
        updateTime();
    },1000)





    return (
        <div style={{textAlign:"center"}}>
            <h1>Homework1: Build Clock Hook get real time</h1>
            
            <p>{hours}:{mintues}:{seconds} / {year}-{month}-{date}</p>
        </div>
    )
}