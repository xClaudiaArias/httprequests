import React from 'react'
import searchIcon from '../assets/icons/icons8-search-30.png'

const SearchBar = ({onSearch}) => {
    return (
        <div className='searchBar'>
            <img src={searchIcon} alt="search icon"></img>
            <input
                type="text"
                placeholder="Search for a country"
                onChange={(e) => onSearch(e.target.value)}
                className="search-bar"
            />
        </div>
    )
}

export default SearchBar