import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    return (
        //     <ul>
        //     <li><a className="active" href="#home">Home</a></li>
        //     <li><a href="#news">News</a></li>
        //     <li><a href="#contact">Contact</a></li>
        //     <li><a href="#about">About</a></li>
        //   </ul>
        <div className='navbar' style={{display: "block", padding:0, margin: 0}}>
            <ul>
                <li><Link to={'/home'} className='nav-link' href="#home">Home</Link></li>
                <li><Link to={'/home'} className='nav-link' href="#news">News</Link></li>
                <li><Link to={'/home'} className='nav-link' href="#contact">Contact</Link></li>
                <li><Link to={'/home'} className='nav-link' href="#about">About</Link></li>
            </ul>
        </div>
    )
}