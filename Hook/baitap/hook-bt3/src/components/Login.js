import { useState } from 'react';

export default function Login() {
    const [username, setUserName] = useState('123');
    const [password, setPassword] = useState('456');

    return (
        <div  style={{textAlign: 'center'}}>
            {/* <h1> Login Account</h1>
            <input type={'text'} onChange={(e) =>{setUserName(e.target.value)}} ></input>
            <input type={'password'} onChange={(e) =>{setPassword(e.target.value)}}></input>
            <button onClick={() =>{ alert("username:"+username + ", password: " + password)}}>Login</button> */}
            <h1>Login</h1>
            <form>

                <div className="form-outline mb-3">
                    <input type="email" id="form2Example1" className=""   
                    onChange={(e) =>{setUserName(e.target.value)}}/> <br></br>
                    <label className="form-label" >Email address</label>
                </div>


                <div className="form-outline mb-3">
                    <input type="password" id="form2Example2" className=""  
                    onChange={(e) =>{setPassword(e.target.value)}}/> <br></br>
                    <label className="form-label" >Password</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4" 
                onClick={() =>{ alert("username:"+username + ", password: " + password)}}>Sign in</button>

            </form>


        </div>
    )
}