
import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
function Navbar(){
    
    return(
         <>
            <nav className="nav-bar">
                <div className="container">
                    <ul>
                        <li><Link to="./">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                    <div className="login"><Link to="/LoginForm">Login</Link></div>
                </div>
            </nav>
        </>
        )
   
}
export default Navbar;