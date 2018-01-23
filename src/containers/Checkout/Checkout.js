import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {};
    componentWillMount() {
        let query = new URLSearchParams(this.props.location.search);

        let ingredients = {};
        let totalPrice = 0;

        for (let param of query.entries()) {
            if (param[0] === "totalPrice") {
                totalPrice = +param[1];
            } else {
                ingredients = JSON.parse(decodeURIComponent(param[1]));
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: totalPrice });
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    cancel={this.cancelHandler}
                    continue={this.continueHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;