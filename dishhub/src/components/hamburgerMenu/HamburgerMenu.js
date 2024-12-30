import React, { useState } from 'react';
import Bars from '../../assets/icons/bars-solid.svg';
import logo from '../../assets/images/logo_tentative.png';
import { Link } from  'react-router-dom';

export default function HamburgerMenu(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="hamburger-menu">
            <button className='hamburger-button' onClick={toggleMenu}>
                <img
                    src={Bars} 
                    className='bars-icon'
                    alt='bars-icon'
                />
            </button>
            <div className={`menu ${isOpen ? "visible" : ""}`}>
                    <Link to="/">
                        <img    
                            src={logo}
                            alt="logo"
                            className='logo'
                        />
                    </Link>                    
                <nav>
                    <ul>
                        <li className="username">Username</li>
                        <li>Account Settings</li>
                        <hr />
                        <li>Post Recipe</li>
                        <li>Favorites</li>
                        <li>Any Folder</li>
                        <li>Create Folder</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}