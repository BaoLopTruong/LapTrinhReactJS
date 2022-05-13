import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [account, setAccount] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent submit default event
        if (account.username === 'admin@gmail.com' && account.password === 'letmein') {
            navigate('/employee', { state: account });
        }
    }
    return (
        <div className="container pt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="username" type="email" className="form-control" placeholder="Enter email" onKeyUp={handleChange}></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Password" onKeyUp={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
export default Login;