import React, { useState } from 'react';
import Bars from '../../assets/icons/bars-solid.svg';
import logo from '../../assets/images/logo_tentative.png';
import { Link } from  'react-router-dom';
import userIcon from '../../assets/icons/user-solid.svg';
import settingIcon from '../../assets/icons/gear-solid.svg';
import postIcon from '../../assets/icons/pen-solid.svg';
import favoriteIcon from '../../assets/icons/heart-solid.svg';
import folderIcon from '../../assets/icons/folder-solid.svg';
import plusIcon from '../../assets/icons/plus-solid.svg';

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
            <div className='menu-shortcut' onMouseEnter={toggleMenu}>
                <ul>
                    <li>
                        <div className='icon'>
                            <img
                                src={userIcon}
                                alt="user-icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div className='icon'>
                            <img
                                src={settingIcon}
                                alt="setting-icon"
                            />
                        </div>
                    </li>
                    <hr />
                    <li>    
                        <div    className='icon'>
                            <img
                                src={postIcon}
                                alt="post-icon"
                            />  
                        </div>
                    </li>
                    <li>
                        <div className='icon'>
                                <img
                                src={favoriteIcon}
                                alt="favorite-icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div className='icon'>
                            <img
                                src={folderIcon}
                                alt="folder-icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div className='icon small'>
                            <img
                                src={plusIcon}
                                alt="plus-icon"
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`menu ${isOpen ? "visible" : ""}`} onMouseLeave={toggleMenu}>
                <Link to="/">
                    <img    
                        src={logo}
                        alt="logo"
                        className='logo'
                    />
                </Link>                    
                <nav>
                    <ul>
                        <li className="username">
                            <div className='icon'>
                                <img
                                    src={userIcon}
                                    alt="user-icon"
                                />
                            </div>
                            Username
                        </li>
                        <li>
                            <div className='icon'>
                                <img
                                    src={settingIcon}
                                    alt="setting-icon"
                                />
                            </div>
                            Account Settings
                        </li>
                        <hr />
                        <li>
                            <div className='icon'>
                                <img
                                    src={postIcon}
                                    alt="post-icon"
                                />
                            </div>
                            Post Recipe
                        </li>
                        <li>
                            <div className='icon'>
                                <img
                                    src={favoriteIcon}
                                    alt="favorite-icon"
                                />
                            </div>
                            Favorites
                        </li>
                        <li>
                            <div className='icon'>
                                <img
                                    src={folderIcon}
                                    alt="folder-icon"
                                />
                            </div>
                            Any Folder
                        </li>
                        <li>
                            <div className='icon small'>
                                <img
                                    src={plusIcon}
                                    alt="plus-icon"
                                />
                            </div>
                            Create Folder
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}