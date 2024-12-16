import React from "react";
import RecipeItem from "./components/recipeItem/RecipeItem";
import HamburgerMenu from "./components/hamburgerMenu/HamburgerMenu";
import SearchBar from "./components/searchBar/SearchBar";
import AuthButtons from "./components/authButtons/AuthButtons";

export default function App (){
    return (
        <>
            <header>
                <HamburgerMenu />
                <SearchBar />
                <AuthButtons />
            </header>
            <main>
                <RecipeItem />
                <RecipeItem />
            </main>
        </>
    )
}