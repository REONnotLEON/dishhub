import React from 'react';
import RecipeItem from "../components/recipeItem/RecipeItem";
import Header from "../components/header/Header";

export default function Home(){
    return (
        <div className="home-page">
            <Header />
            <main>
                <h2>All Recipes: </h2>
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