import React from 'react';
import Header from '../components/header/Header';
import BackButton from "../components/backButton/BackButton";
import FavoriteButton from '../components/favoriteButton/FavoriteButton';
import SaveButton from '../components/saveButton/SaveButton';
import SampleImg from '../assets/images/sample.jpg';
import UserIcon from '../assets/icons/user-solid.svg';
import { Link } from 'react-router-dom';

export default function RecipeDetail(){
    return(
        <div className='recipe-detail-page'>
            <main>
                <div className="recipe-detail-container">
                    <div className="recipe-image-container">
                        <img
                            src={SampleImg}
                            className="recipe-image"
                        />
                    </div>
                    <div className="recipe-overview">
                        <div className="name-and-buttons">
                            <span className="recipe-name">NAME</span>
                            <div className="buttons">
                                <span>1,234 likes</span>
                                <FavoriteButton />
                                <SaveButton />
                            </div>
                        </div>
                        <div className='user-info'>
                            <Link
                                to="/author-profile"
                            >
                                <img
                                    src={UserIcon}
                                    className="user-icon"
                                />
                                <span>username</span>
                            </Link>
                       </div>
                    </div>
                    <div className="recipe-description">
                        <p>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </p>
                    </div>
                </div>
                <BackButton />
            </main>
        </div>
    )
}