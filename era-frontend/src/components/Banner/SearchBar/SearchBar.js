import React from 'react';
import classes from './SearchBar.module.css'

const SearchBar = () => (
    <input className={classes.SearchBar} type="search" placeholder="Enter an address, city, neighbourhood or zip code"/>
)

export default SearchBar
