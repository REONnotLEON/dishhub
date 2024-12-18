import React from "react";
import RecipeItem from "./components/recipeItem/RecipeItem";
import Header from "./components/header/Header";
import BackButton from "./components/backButton/BackButton";

export default function App (){
    return (
        <>
            <Header />
            <main>
                <RecipeItem />
                <RecipeItem />
                <BackButton />
            </main>
        </>
    )
}