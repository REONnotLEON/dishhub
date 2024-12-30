import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchGlass from '../../assets/icons/magnifying-glass-solid.svg';

export default function SearchBar () {

    // const [searchParams, setSearchParams] = useSearchParams()

    // const recipe= searchParams.get("");


    // const handleChange = (e) => {
    //     setSearchParams(e.target.value);
    // }

    // const handleSearch = (e) => {
    //     e.preventDefault();
    // }

    return (
        <form className="search-bar" /*onSubmit={handleSearch}*/>
            <div className="search-container">
                <img
                    src={SearchGlass}
                    alt="search-glass icon"
                    className="search-glass-icon"
                />
                <input 
                    type="text"
                    className="search-input"
                    placeholder="Search Recipe"
                    // value={searchParams}
                    name="search-input"
                    // onChange={handleChange}
                />
            </div>
        </form>
    )
}