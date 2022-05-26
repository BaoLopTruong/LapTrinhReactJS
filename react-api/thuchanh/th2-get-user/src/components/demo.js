import axios from "axios";
import { useEffect, useState } from "react";


export default function GetUser(){

    const [users, setUser] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3001/api/users")
        .then(res =>{
            setUser(res.data);
        })
        .catch(err =>{
            throw err;
        });
    }, [users]);
    return(
        <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    )
}