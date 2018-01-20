import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const classByType = {
    'bread-bottom': classes.BreadBottom,
    'meat': classes.Meat,
    'cheese': classes.Cheese,
    'salad': classes.Salad,
    'bacon': classes.Bacon,    
};

class Ingredient extends Component {

    render() {
        let type = this.props.type;
        let ingredient = null;

        if (type === 'bread-top') {
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
        } else if (classByType[type]) {
            ingredient = <div className={classByType[type]}></div>;
        };

        return ingredient;
    }
};

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredient;