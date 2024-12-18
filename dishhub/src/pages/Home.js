import React from 'react';
import RecipeItem from "../components/recipeItem/RecipeItem";
import Header from "../components/header/Header";
import BackButton from "../components/backButton/BackButton";

export default function Home(){
    return (
        <>
            <Header />
            <main>
                <span>All Recipes: </span>
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
                <BackButton />
            </main>
        </>
    )
}