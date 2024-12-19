import React, {useState} from 'react';
import SearchGlass from '../../assets/icons/magnifying-glass-solid.svg';

export default function SearchBar () {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
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
                    value={query}
                    name="search-input"
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}