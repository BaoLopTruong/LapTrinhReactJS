import Navbar from "./Navbar";

export default function Layout({children}){

    return(
        <div className="layout">
            Layout
            <Navbar></Navbar>
            <div className="main">
                {children}
            </div>
        </div>
    )
}