
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Add(){
    const [users, setUsers] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/users/')
        .then(res =>{
            setUsers({users: res.data})
        })
        .catch(err =>{
            throw err;
        })
        .finally(()=>{
            console.log(users.users[users.users.length-1].id)
        })
    });
        
    

    function handleChange(event){
        setUser({
            ...user,
            id:  users.users[users.users.length-1].id +1,
            name: event.target.value
    })
    console.log(user)
    }

    function handleSubmit() {
        axios.post('http://localhost:3001/users/',user)
        .then(res =>{
            alert("add successfully", res)
        })
        .catch(err =>{
            alert("something wrong", err)
        })
        .finally(()=>{
            window.location.href = "/";
        })
    }

    return(
        <div>
            <form>
            <div>
            <label>Name:</label>
            <input style={{marginLeft: "26px"}} name="name" value={user.name || ""} onChange={handleChange} />
            <button type='button' onClick={handleSubmit}>Add</button>
          </div>
          <br></br>
            </form>
        </div>
    )
}