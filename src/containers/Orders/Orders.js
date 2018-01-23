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
        let orders = Object.keys(this.state.orders).map(key => {
            let order = this.state.orders[key];
            return <Order key={key} ingredients={order.ingredients} price={order.price} />
        });

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default WithErrorHandler(Orders, axios);