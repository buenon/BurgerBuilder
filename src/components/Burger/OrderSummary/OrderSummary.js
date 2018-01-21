import React from 'react';
import Aux from '../../../hoc/Auxi'

const OrderSummary = (props) => {
    let ing = props.ingredients;
    let children = Object.keys(ing).map((key) => {
        return <li key={key}>{ing[key].label}: {ing[key].count}</li>;
    });

    return (
        <div>
            <Aux>
                <h3>Your order:</h3>
                <p>Chosen Ingredients</p>
                <ul>
                    {children}
                </ul>
            </Aux>
        </div>
    );
};

export default OrderSummary;