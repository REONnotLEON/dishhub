import React from 'react';
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import SearchBar from "../searchBar/SearchBar";
import AccountIcon from "../accountIcon/AccountIcon";
import { Link } from 'react-router-dom';

export default function(){

    return(
        <header>
            <HamburgerMenu />
            <SearchBar />
            <Link to="auth">
                <AccountIcon />
            </Link>
        </header>
    )
}