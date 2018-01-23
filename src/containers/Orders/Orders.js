import React, { Component } from 'react';
import classes from './Orders.css';
import Order from './../../components/Order/Order';
import axios from "../../axios-orders";
import WithErrorHandler from './../../hoc/WithErrorHandler';
import Ingredient from './../../components/Burger/BurgerIngredient/BurgerIngredient';

class Orders extends Component {
    state = {
        orders: []
    }

    componentDidMount() {
        axios.get("/orders.json").then(res => {
            this.setState({orders: res.data});
        });
    }
    
    render() {
        let orders = this.state.orders.map(order => {
            return <Order ingredients={order.ingredients} price={order.price} />
        });

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default WithErrorHandler(Orders, axios);