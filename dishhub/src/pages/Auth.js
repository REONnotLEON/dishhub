import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_tentative.png';

export default function Auth(){

    const [haveAccount, setHaveAccount] = useState(false)

    const toggleHaveAccount = () => {
        setHaveAccount((prev) => !prev)
    }

    const loginForm = (
        <div className='login-form forms'>
            <h2>Log in</h2>
            <form>
                <div className='form-group'>
                    <input type="text" placeholder="account name" />
                    <input type="password" placeholder="password" />
                </div>
                <div className='form-actions'>
                    <p onClick={toggleHaveAccount}>Sign up</p>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    const signupForm = (
        <div className='signup-form forms'>
            <h2>Sign up</h2>
            <form>
                <div className='form-group'>
                    <input type="email" placeholder='email' />
                    <input type='text' placeholder='username' />
                    <input type='password' placeholder='password' />
                    <input type='password' placeholder='confirm password' />
                </div>
                <div className='form-actions'>
                    <p onClick={toggleHaveAccount}>Log in</p>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className='auth-page'>
            <header>
              <Link to='/'>
                <img
                    src={logo}
                    className="logo"
                    alt="logo"
                />
                </Link>
            </header>
            <main>
                {haveAccount ? loginForm : signupForm}
            </main>
        </div>
    );
}