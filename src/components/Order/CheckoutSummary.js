import React from 'react';
import Burger from '../Burger/Burger';
import Button from './../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you enjoy your burger!</h1>
            <div className={classes.BurgerWrapper}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button type="Warn" clicked={props.cancel}>CANCEL</Button>
            <Button type="Success" clicked={props.continue}>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;