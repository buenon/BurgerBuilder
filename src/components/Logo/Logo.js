import React from 'react';
import logo from '../../assets/images/logo.png';
import classes from './Logo.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="BurgerBuilder"/>
        </div>
    );
};

export default Logo;