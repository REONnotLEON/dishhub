import React from 'react';
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import SearchBar from "../searchBar/SearchBar";
import AccountIcon from "../accountIcon/AccountIcon";

export default function(){

    return(
        <header>
            <HamburgerMenu />
            <SearchBar />
            <AccountIcon />
        </header>
    )
}