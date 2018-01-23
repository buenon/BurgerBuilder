import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
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
                    ingredients={JSON.parse(decodeURIComponent(this.props.location.search.substr(1)))}
                    cancel={this.cancelHandler}
                    continue={this.continueHandler}
                />
            </div>
        );
    }
}

export default Checkout;