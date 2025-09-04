import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header = () =>{

    const [btnName, setbtnName] = useState('Login');

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={`${LOGO_URL}`} />
            </div>
            <div className="nav-items">
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink> 
                    <li>Cart</li>
                    <button onClick={()=>
                        
                        setbtnName(btnName=='Login'?'Logout':'Login')}>{btnName}</button>

                </ul>
            </div>
        </div>
    )
}

export default Header;