import React from "react";
import RecipeItem from "./components/recipeItem/RecipeItem";
import HamburgerMenu from "./components/hamburgerMenu/HamburgerMenu";
import SearchBar from "./components/searchBar/SearchBar";

export default function App (){
    return (
        <>
            <header>
                <HamburgerMenu />
                <SearchBar />
            </header>
            <main>
                <RecipeItem />
                <RecipeItem />
            </main>
        </>
    )
}