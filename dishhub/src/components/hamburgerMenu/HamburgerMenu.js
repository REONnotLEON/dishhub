import React, { useState } from 'react';
import Bars from '../../assets/icons/bars-solid.svg';

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
                {/* logo is here */}
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