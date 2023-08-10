import React from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
       <nav>
        <img src={logo} alt="logo" />
        <ul>
            <li className="active">Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Co-traveller</li>
            <li>FAQs</li>
            <li>Contect Us</li>
            <li>Register</li>
            <li><FaBars /></li>
        </ul>
       </nav>
    )
};

export default Navbar;