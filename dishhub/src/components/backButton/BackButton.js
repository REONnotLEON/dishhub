import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <button className="back-button" onClick={handleClick}>
            &lt;&lt; Back
        </button>
    )
}