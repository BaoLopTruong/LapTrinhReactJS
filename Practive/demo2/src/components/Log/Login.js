import './login.css'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [users, setUsers] = useState([]);
    const [userLogined, setUserLogined] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
        .then(res =>{
            setUsers(res.data)
        })
    });
    
    const handleChange = (e) =>{
        setUserLogined({
            ...userLogined,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        users.map(user =>{
            if(user.username === userLogined.username && user.password === userLogined.password){
                navigate('/home')
            }
           
        })
    }

    return (
        <div className="login-page">
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="md-3">
                <form className="form">
                    <div className="input-id">
                        <label className="form-label">Username:</label>
                        <input className="form-control" type="text" name='username' placeholder="enter your username here" onChange={handleChange}></input>
                    </div>
                    <div className="input-password">
                        <label className="form-label">Password:</label>
                        <input className="form-control" type="password" name='password' onChange={handleChange} ></input>
                    </div>
                    <div className="btn-submit">
                        <button className="btn btn-primary" onClick={handleSubmit}> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    )
}