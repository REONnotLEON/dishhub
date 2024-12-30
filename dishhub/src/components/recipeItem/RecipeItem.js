import React from "react";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import sampleImg from "../../assets/images/sample.jpg";
import SaveButton from "../saveButton/SaveButton";
import { Link } from "react-router-dom";

export default function RecipeItem () {
    return (
            <div className="recipe-container">
                <Link to="recipe-detail">
                    <img
                        src={sampleImg}
                        alt=''
                        className='recipe-image'
                    />
                    <p>NAME</p>
                </Link>
                <FavoriteButton />
                <SaveButton />
            </div>
    )
}