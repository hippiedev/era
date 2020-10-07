import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Menu from '../Navigation/Menu/Menu';
import Banner from '../Banner/Banner';

const Layout = () => (
    <Aux>
        <Menu/>
        <main className={classes.content}>
            <Banner/>
        </main>
    </Aux>

)
    

export default Layout
