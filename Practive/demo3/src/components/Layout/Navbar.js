import {Link} from 'react-router-dom';
import './navbar.css'

export default function Navbar (){

    return(
        <div style={{display: "block", margin: 0, padding: 0}} className="navbar">
           <ul>
            <li><Link className='nav-link' to={'/'}>Home</Link></li>
            <li><Link className='nav-link' to={'/newbook'}>Create</Link></li>
            <li><Link className='nav-link' to={'/profile'}>Profile</Link></li>
           </ul>
        </div>
    )
}