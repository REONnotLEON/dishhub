import React from "react";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import sampleImg from "../../assets/images/sample.jpg";

export default function RecipeItem () {
    return (
        <div className="recipe-container">
            <img
                src={sampleImg}
                alt=''
                className='recipe-image'
            />
            <p>NAME</p>
            <FavoriteButton />
        </div>
    )
}