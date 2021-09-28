import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import logo from '../assets/images/4.png';
const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <Link to='/' className="HomeLink">Home</Link>
            <Link to='/About' className="AboutLink">About us</Link>
            <Link to='/Login' className="loginLink">Login</Link>
        </div>
    )

}
export default Header;