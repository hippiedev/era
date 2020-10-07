import React from 'react';
import classes from './Menu.module.css';
import Aux from '../../../hoc/Auxillary'

const Menu = () => (
    <Aux>
    
    <nav className={classes.menubar}>
        <ul>
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Agent Finder</li>
        </ul>
        <ul>
            <li>Manage Rentals</li>
            <li>Login</li>
            <li>Contact</li>
            <li>Sign in</li>
        </ul>
    </nav>
    </Aux>
)

export default Menu
