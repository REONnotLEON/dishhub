import React from 'react';
import userIcon from '../../assets/icons/user-solid.svg';

export default function AccountIcon(){
    
    return (
        <div className="auth-container">
            <img
             src={userIcon}
             alt="user-icon"
             className='user-icon'
            />
        </div>
    );
}