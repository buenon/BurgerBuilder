import React from 'react';
import NavigationItem from './NavigationItem';
import classes from "./NavigationItems.css";

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/" exact clicked={props.close}>Home</NavigationItem>
            <NavigationItem href="/orders" clicked={props.close}>Orders</NavigationItem>
        </ul>
    );
};

export default NavigationItems;