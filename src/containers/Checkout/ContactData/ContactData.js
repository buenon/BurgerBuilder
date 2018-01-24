import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from "../../../axios-orders";
import Spinner from './../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import WithErrorHandler from '../../../hoc/WithErrorHandler';

class ContactData extends Component {
    state = {
        formConfig: {
            name: {
                type: 'input',
                config: {
                    type: 'text',
                },
                label: "Name",
                value: '',
            },
            street: {
                type: 'input',
                config: {
                    type: 'text',
                },
                label: "Street",
                value: '',
            },
            zip: {
                type: 'input',
                config: {
                    type: 'text',
                },
                label: "ZIP Code",
                value: '',
            },
            country: {
                type: 'input',
                config: {
                    type: 'text',
                },
                label: "Country",
                value: '',
            },
            email: {
                type: 'input',
                config: {
                    type: 'email',
                },
                label: "E-Mail",
                value: '',
            },
            deliveryMethod: {
                type: 'select',
                config: {
                    options: [
                        { value: 'fastest', caption: "Fastest" },
                        { value: 'cheepest', caption: "Cheepest" },
                    ]
                },
                value: 'fastest',
            },
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        let formConfig = this.state.formConfig;

        let orderData = {};
        for (let key in formConfig) {
            orderData[key] = formConfig[key].value;
        }

        axios.post('/orders.json', {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: orderData,
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
            let elements = [];
            for (let key in this.state.formConfig) {
                let elem = this.state.formConfig[key];
                elements.push({
                    key: key,
                    config: elem
                })
            }

            return <form onSubmit={this.orderHandler}>
                {elements.map(element => {
                    return <Input
                        key={element.key}
                        elementType={element.config.type}
                        config={element.config.config}
                        label={element.config.label}
                        value={element.config.value}
                        changed={(event) => { this.inputChangedHandler(event, element.key) }} />
                })}

                <Button type="Success">Order</Button>
            </form>
        }
    }

    inputChangedHandler = (event, id) => {
        let updatedFormConfig = { ...this.state.formConfig };
        let updatedElement = {...updatedFormConfig[id]};

        updatedElement.value = event.target.value;
        updatedFormConfig[id] = updatedElement;
        this.setState({formConfig: updatedFormConfig});
    }
}

export default WithErrorHandler(ContactData, axios);