import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
// console.log(window); 
function Navbar(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                    
            </ul>
        </nav>
    );
}

export default Navbar;