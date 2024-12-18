import React, {useState} from 'react';
import FolderRegular from '../../assets/icons/folder-regular.svg';
import FolderSolid from '../../assets/icons/folder-solid.svg';

export default function SaveButton ({onClickHandler}){

    const [isSaved, setIsSaved] = useState(false);

    const handleClick = () => {
        setIsSaved((prev) => !prev); 
    }

    return (
        <button className="save-button" onClick={handleClick}>
            <img
                className="folder-icon" 
                src={isSaved ? FolderSolid : FolderRegular}
                alt="folder-icon"
            />
        </button>
    )
}