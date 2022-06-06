import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './login.css'
export default function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({username: "", password: ""});
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key,value) =>{
        const newVal = {...user, [key]:value};
        setUser(newVal);
    };
    const login = () =>{
        dispatch({
            type:"LOGIN",
            payload: user
        });
    }
    useEffect(()=>{
        if(userlogined.username){
            navigate("/users");
        }
    },[userlogined,navigate]);

    return (
        <form>
        <h1>LOGIN</h1>
          <label>User name:</label>
          <br></br>
          <input
            id="username"
            onChange={e => setValueForUser("username", e.target.value)}
            type="text"
          />
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            id="password"
            onChange={e => setValueForUser("password", e.target.value)}
            type="password"
          />
          <br></br>
          <button
            type="button"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </form>
      );
}