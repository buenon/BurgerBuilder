import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            bacon: {
                count: 1,
                label: "Bacon",
                max: 1,
                price: 0.5
            },
            cheese: {
                count: 2,
                label: "Cheese",
                max: 2,
                price: 0.3
            },
            meat: {
                count: 1,
                label: "Meat",
                max: 2,
                price: 0.7
            },
            salad: {
                count: 1,
                label: "Salad",
                max: 1,
                price: 0.2
            }
        }
    }

    cancel = () => {
        this.props.history.goBack();        
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    cancel={this.cancel}
                    continue={this.continue}
                />
            </div>
        );
    }
}

export default Checkout;