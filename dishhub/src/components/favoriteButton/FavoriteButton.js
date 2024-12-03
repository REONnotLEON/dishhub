import React, {useState} from 'react';
import HeartSolid from '../../assets/icons/heart-solid.svg';
import HeartRegular from '../../assets/icons/heart-regular.svg';

export default function FavoriteButton ({onClickHandler}){

    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite((prev) => !prev); 
    }

    return (
        <button className="favorite-button" onClick={handleClick}>
            <img
                className="heart-icon" 
                src={isFavorite ? HeartSolid : HeartRegular}
                alt="heart-icon"
            />
        </button>
    )
}