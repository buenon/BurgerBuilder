import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from "../../../axios-orders";
import Spinner from './../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import WithErrorHandler from '../../../hoc/WithErrorHandler';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zip: '',
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        axios.post('/orders.json', {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: "Nadav Bueno",
                address: {
                    street: "My street",
                    zip: "12345",
                    country: "Israel"
                },
                email: "test@nadav.com",
            },
            deliveryMethod: "fastest"
        }).then(res => {
            this.setState({ loading: false, showSummary: false });
            this.props.history.push('/');
        }).catch(error => {
            this.setState({ loading: false, showSummary: false });
        });
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter you contact information</h4>
                {this.getContent()}
            </div>
        );
    }

    getContent = () => {
        if (this.state.loading) {
            return <Spinner />;
        }
        else {
            return <form >
                <Input type="text" name="name" label="Name" />
                <Input type="email" name="email" label="Email" />
                <Input type="text" name="street" label="Street" />
                <Input type="text" name="zip" label="Zip Code" />
                <Button type="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        }
    }
}

export default WithErrorHandler(ContactData, axios);