import React from "react";
import RecipeItem from "./components/recipeItem/RecipeItem";
import Header from "./components/header/Header";

export default function App (){
    return (
        <>
            <Header />
            <main>
                <RecipeItem />
                <RecipeItem />
            </main>
        </>
    )
}