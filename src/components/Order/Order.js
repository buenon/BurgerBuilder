import React from 'react';
import classes from './Order.css';
import Burger from '../Burger/Burger';

const Order = (props) => {
    return (
        <div className={classes.Order}>
            <div className={classes.BurgerWrapper}>
                <Burger ingredients={props.ingredients} />
            </div>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    );
};

export default Order;