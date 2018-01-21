import React from 'react';
import NavigationItem from './NavigationItem';
import classes from "./NavigationItems.css";

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/" active>Home</NavigationItem>
            <NavigationItem href="/">Checkout</NavigationItem>
        </ul>
    );
};

export default NavigationItems;