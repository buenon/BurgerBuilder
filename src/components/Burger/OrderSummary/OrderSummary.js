import React from 'react';
import Wrapper from '../../../hoc/Wrapper'
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    let ing = props.ingredients;
    let children = Object.keys(ing).map((key) => {
        return <li key={key}>{ing[key].label}: {ing[key].count}</li>;
    });

    return (
        <div>
            <Wrapper>
                <h3>Your order:</h3>
                <p>Chosen Ingredients</p>
                <ul>
                    {children}
                </ul>
                <div><strong>Total price: {props.price.toFixed(2)}$</strong></div>
                <div>Continue to checkout?</div>
                <Button type="Danger" clicked={props.cancel}>CANCEL</Button>
                <Button type="Success" clicked={props.continue}>CONTINUE</Button>
            </Wrapper>
        </div>
    );
};

export default OrderSummary;