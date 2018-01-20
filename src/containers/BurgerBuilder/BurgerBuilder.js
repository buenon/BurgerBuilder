import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        price: 4
    };

    addIngredientHandler = (ingredient) => {
        let curr = {
            ...this.state.ingredients
        };
        let ing = curr[ingredient];

        if (!LIMIT_INGREDIENTS || ing.count < ing.max) {
            ing.count += 1;
            let newPrice = this.state.price + ing.price;
            this.setState({ingredients: curr, price: newPrice});
        }
    }

    removeIngredientHandler = (ingredient) => {
        let curr = {
            ...this.state.ingredients
        };
        let ing = curr[ingredient];

        if (ing.count > 0) {
            ing.count -= 1;
            let newPrice = this.state.price - ing.price;
            this.setState({ingredients: curr, price: newPrice});
        }
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

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredients={this.state.ingredients}
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    price={this.state.price}
                    disabled={disabledInfo}/>
            </Aux>
        );
    }
};

export default BurgerBuilder;