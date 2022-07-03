import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function Layout({children}){
    const navigate = useNavigate();
    const userlogined = useSelector(state => state.userlogined);
    useEffect(() => {
      if (!userlogined.username) {
        navigate("/login");
      }
    }, [userlogined, navigate]);
    return(
        <div className="layout">
            <Navbar></Navbar>
            <div className="main">
                {children}
            </div>
        </div>
    )
}