import React  from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        
            <nav className="navbar">
                <ul className="navbar__ul">
                    <li className="navbar__ul-li">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="navbar__ul-li">
                        <Link to="/Cities" className="nav__link">Cities</Link>
                    </li>
                   
                    <li className="navbar__ul-li">
                        <Link to="/Login" className="nav__link">Login</Link>
                    </li>
                   
                    <li className="navbar__ul-li">
                        <Link to="/Register" className="nav__link">Register</Link>
                    </li>
                   
              
                </ul>
            </nav>   
    
    )
}

export default Navbar


