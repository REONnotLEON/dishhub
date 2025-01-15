import React from 'react';
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import SearchBar from "../searchBar/SearchBar";
import AccountIcon from "../accountIcon/AccountIcon";
import { Link } from 'react-router-dom';
import  logo  from '../../assets/images/logo_tentative.png';

export default function(){

    return(
        <header>
            <HamburgerMenu />
            <Link to="/">
                <img    
                    src={logo}
                    alt="logo"
                    className='logo-header'
                />
            </Link> 
            <SearchBar />
            <Link to="auth">
                <AccountIcon />
            </Link>
        </header>
    )
}