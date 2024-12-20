import React from 'react';
import RecipeItem from "../components/recipeItem/RecipeItem";
import Header from "../components/header/Header";

export default function Home(){
    return (
        <div className="home-page">
            <Header />
            <main>
                <span>All Recipes: </span>
                <div className="recipe-items-container">
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                </div>
            </main>
        </div>
    )
}