import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header = ({isOnline}) =>{

    const [btnName, setbtnName] = useState('Login');

    
    

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={`${LOGO_URL}`} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Kshitij 🟢</li>
                    <li><NavLink to='/' className="navLinks">Home</NavLink></li>
                     <li><NavLink to='/about' className="navLinks">About</NavLink></li>
                     <li><NavLink to='/contact' className="navLinks">Contact</NavLink> </li>
                    <li>Cart</li>
                    <button onClick={()=>
                        
                        setbtnName(btnName=='Login'?'Logout':'Login')}>{btnName}</button>

                </ul>
            </div>
        </div>
    )
}

export default Header;