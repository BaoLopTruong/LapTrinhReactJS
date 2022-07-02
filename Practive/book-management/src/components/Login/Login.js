import './login.css'
import { useState, useEffect } from 'react'
import {checkLogin, fakeLogin} from '../../redux/action';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const userlogined = useSelector(state => state.userlogined);

    useEffect(() => {
        if(userlogined.username){
            navigate('/')
        }
        console.log(userlogined)
    }, [userlogined, navigate]);
    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        console.log(user)
    }
    const handleSubmit = () =>{
        dispatch(checkLogin(user))
    }

    return (
        <div className="login">
        <div className='title'>
            <h1>Login</h1>
        </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label><br></br>
                    <input type="text" name="username" placeholder='enter your username here' onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" >Password</label><br></br>
                    <input type="password" name="password" onChange={handleChange}></input>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}