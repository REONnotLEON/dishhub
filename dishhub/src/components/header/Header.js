import React from 'react';
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import SearchBar from "../searchBar/SearchBar";
import AuthButtons from "../authButtons/AuthButtons";

export default function(){
    return(
        <header>
            <HamburgerMenu />
            <SearchBar />
            <AuthButtons />
        </header>
    )
}