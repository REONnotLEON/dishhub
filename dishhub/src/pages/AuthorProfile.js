import React from "react";
import Header from "../components/header/Header";
import RecipeItem from "../components/recipeItem/RecipeItem";
import BackButton from "../components/backButton/BackButton";
import userIcon from "../assets/icons/user-solid.svg";
import heart from "../assets/icons/heart-solid.svg";

export default function AuthorProfile(){
    return (
        <div className="author-profile-page">
            <Header />
            <main>
                <div className="author-overview">
                    <div className="name-and-likes name">
                        <img
                            src={userIcon}
                            alt="author icon"
                            className="author-icon"
                        />
                        <span>NAME</span>
                    </div>
                    <div className="name-and-likes likes">
                        <img
                            src={heart}
                            alt="favorite"
                            className="heart"
                        />
                        <span>1,234</span>
                    </div>
                </div>
                <h2>Posts: </h2>
                <div className="recipe-items-container">
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                </div>
                <BackButton />
            </main>
        </div>
    )
}