import React, {useState} from 'react';
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import SearchBar from "../searchBar/SearchBar";
import AuthButtons from "../authButtons/AuthButtons";

export default function(){
    
    const [logIn, setLogIn] = useState(false);

    return(
        <header>
            <HamburgerMenu />
            <SearchBar />
            {logIn ? "" : <AuthButtons />}
        </header>
    )
}