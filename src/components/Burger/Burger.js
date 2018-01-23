import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css';

const Burger = (props) => {
    let ingArr = [];

    if (props.ingredients) {
        ingArr = Object
            .keys(props.ingredients)
            .map(igKey => {
                let ing = props.ingredients[igKey];
                return [...Array(ing.count)].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);
    }

    if (ingArr.length === 0) {
        ingArr = <p>Please add ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient key="bTop" type="bread-top" />
            {ingArr}
            <BurgerIngredient key="bBottom" type="bread-bottom" />
        </div>
    );
};

export default Burger;