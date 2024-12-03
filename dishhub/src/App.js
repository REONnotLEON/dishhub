import React from "react";
import RecipeItem from "./components/recipeItem/RecipeItem";
import HamburgerMenu from "./components/hamburgerMenu/HamburgerMenu";

export default function App (){
    return (
        <>
            <header>
                <HamburgerMenu />
            </header>
            <main>
                <RecipeItem />
                <RecipeItem />
            </main>
        </>
    )
}