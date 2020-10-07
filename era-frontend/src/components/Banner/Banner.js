import React from 'react';
import houseSearch from '../../assets/images/house_search.svg';
import classes from './Banner.module.css';
import SearchBar from './SearchBar/SearchBar'

const Banner = () => (
    <div className={classes.Banner}>
    <img src={houseSearch} alt="search for houses"/>
    <SearchBar/>
    </div>
)

export default Banner
