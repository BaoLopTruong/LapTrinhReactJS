import './login.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export default function Login(){

    const [userLoigned, setUserLogined] = useState({})
    const [user, setUser] = useState([])

    const navigate = useNavigate();
    
    useEffect(() =>{
        axios.get("http://localhost:3001/users")
        .then(res =>{
            setUser(res.data)
        })
    })

    const handleChange = (e) =>{
        setUserLogined({
            ...userLoigned,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
      // eslint-disable-next-line array-callback-return
      user.map(user =>{
        if(userLoigned.username === user.username && userLoigned.password === user.password){
            alert("dang nhap thanh cong")
            navigate('/home')
        }
      })
    }

    return(
        <div className='login'>
           
            <form >
                <div>
                    <h1> Login</h1>
                </div>
                <div>
                    <label>Username:</label> <br></br>
                    <input type='text' name="username" onChange={handleChange}></input>
                </div>
                <div>
                    <label>Password:</label> <br></br>
                    <input type="password" name="password" onChange={handleChange}></input>
                </div>
                <div>
                <br></br>
                    <button className='btn btn-primary' type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}