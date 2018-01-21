import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl'

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div className={classes.Price}>Amont:
                <b>{props
                        .price
                        .toFixed(2)}$</b>
            </div>
            {Object
                .keys(props.ingredients)
                .map((key) => {
                    let ing = props.ingredients[key];
                    return <BuildControl
                        key={key}
                        add={props.add}
                        remove={props.remove}
                        type={key}
                        label={ing.label}
                        disabled={props.disabled[key]}/>
                })}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.showModal}>ORDER NOW!</button>
        </div>
    );
};

export default buildControls;