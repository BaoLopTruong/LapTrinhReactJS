import { useState } from "react";
export default function useTime(){

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





    return [year, month, date, hours, mintues, seconds];
}