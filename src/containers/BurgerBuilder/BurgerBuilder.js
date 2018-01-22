import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from "../../axios-orders";
import Spinner from '../../components/UI/Spinner/Spinner';

const LIMIT_INGREDIENTS = false;

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: {
                label: "Salad",
                count: 0,
                max: 1,
                price: 0.2
            },
            bacon: {
                label: "Bacon",
                count: 0,
                max: 1,
                price: 0.5
            },
            cheese: {
                label: "Cheese",
                count: 0,
                max: 2,
                price: 0.3
            },
            meat: {
                label: "Meat",
                count: 0,
                max: 2,
                price: 0.7
            }
        },
        totalPrice: 4,
        purchasable: false,
        showSummary: false,
        loading: false,
    };

    updatePurchasableState(ingredients) {
        let ingCount = Object.keys(ingredients).map((key) => {
            return ingredients[key].count;
        }).reduce((sum, el) => {
            return sum + el;
        });

        this.setState({ purchasable: ingCount > 0 });
    }

    addIngredientHandler = (ingredient) => {
        let curr = {
            ...this.state.ingredients
        };
        let ing = curr[ingredient];

        if (!LIMIT_INGREDIENTS || ing.count < ing.max) {
            ing.count += 1;
            let newPrice = this.state.totalPrice + ing.price;
            this.setState({ ingredients: curr, totalPrice: newPrice });
        }

        this.updatePurchasableState(curr);
    }

    removeIngredientHandler = (ingredient) => {
        let curr = {
            ...this.state.ingredients
        };
        let ing = curr[ingredient];

        if (ing.count > 0) {
            ing.count -= 1;
            let newPrice = this.state.totalPrice - ing.price;
            this.setState({ ingredients: curr, totalPrice: newPrice });
        }

        this.updatePurchasableState(curr);
    }

    purchaseHandler = () => {
        this.setState({ showSummary: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ showSummary: false });
    }

    purchaseContinueHandler = () => {
        this.setState({ loading: true });
        axios.post('/orders.json', {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
        }).catch(error => {
            this.setState({ loading: false, showSummary: false });
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = {
                add: LIMIT_INGREDIENTS && disabledInfo[key].count >= disabledInfo[key].max,
                remove: disabledInfo[key].count <= 0
            };
        }

        let modalContent = <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice} />
        if (this.state.loading) {
            modalContent = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.showSummary} close={this.purchaseCancelHandler}>
                    {modalContent}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredients={this.state.ingredients}
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    showModal={this.purchaseHandler} />
            </Aux>
        );
    }
};

export default BurgerBuilder;