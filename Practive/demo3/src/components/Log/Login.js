import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../../redux/action";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    };
    const login = () => {
        dispatch(fakeLogin(user));
    };
    useEffect(() => {
        if (userlogined.username) {
            navigate("/");
        }
    }, [userlogined, navigate]);
    return (
        // <form>
        //     <label>User name</label>
        //     <input
        //         id="username"
        //         onChange={e => setValueForUser("username", e.target.value)}
        //         type="text"
        //     />
        //     <label>Password</label>
        //     <input
        //         id="password"
        //         onChange={e => setValueForUser("password", e.target.value)}
        //         type="password"
        //     />
        //     <button
        //         type="button"
        //         onClick={() => {
        //             login();
        //         }}
        //     >
        //         Login
        //     </button>
        // </form>
        <div className="login">
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="form-login">
                <form>
                    <div className="form-username">
                        <label className="form-label">Username:</label>
                        <input className="form-control"   id="username" type='text' placeholder="Enter your username here"
                        onChange={e => setValueForUser("username", e.target.value)}></input>
                    </div>
                    <div className="form-password">
                        <label className="form-label">Password:</label>
                        <input className="form-control"  id="password" type='password' onChange={e => setValueForUser("password", e.target.value)} ></input>
                    </div>
                    <div className="form-btn">
                        <button type="button" className="btn btn-primary"  onClick={() => {
                    login();
                 }}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;