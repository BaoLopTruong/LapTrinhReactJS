
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function Update(){
    
    const { userId } = useParams();
    
    
    const [user, setUser] = useState({})

    useEffect(() => {
        if(userId){
            axios.get(`http://localhost:3001/users/${userId}`)
            .then(res =>{
                setUser(res.data)
            })
            .catch(err =>{
                throw err;
            })
        }
       
    },[userId]);
        
    

    function handleChange(event){
        setUser({
            ...user,
           [event.target.name]: event.target.value
    })
    console.log(user)
    }

    function handleSubmit() {
        axios.put(`http://localhost:3001/users/${userId}`,user)
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
            <button type='button' onClick={handleSubmit}>Update</button>
          </div>
          <br></br>
            </form>
        </div>
    )
}