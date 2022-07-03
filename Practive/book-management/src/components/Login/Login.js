import './login.css'
import { useState, useEffect } from 'react'
import { checkLogin, fakeLogin } from '../../redux/action';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const userlogined = useSelector(state => state.userlogined);

    useEffect(() => {
        console.log(userlogined)
        if (userlogined.username) {
            navigate('/')
        }
        console.log(userlogined)
    }, [userlogined, navigate]);
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }
    const handleSubmit = () => {
        dispatch(fakeLogin(user))
    }

    return (
        <div className="login">
            <div className='title'>
                <h1>Login</h1>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>

                    <input style={{width: '20%'}} type="text" className="form-control" name='username' onChange={handleChange}  ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input style={{width: '20%'}}  type="password" className="form-control" name='password' onChange={handleChange} ></input>

                </div>
                <button style={{marginLeft: "90px"}} type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}