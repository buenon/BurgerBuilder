import React from 'react';
import classes from "./NavigationItem.css";
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.href} exact={props.exact} activeClassName={classes.active} onClick={props.clicked}>{props.children}</NavLink>
        </li>
    );
};

export default NavigationItem;