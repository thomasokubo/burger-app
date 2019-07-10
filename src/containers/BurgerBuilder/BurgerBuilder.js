import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    cheese: 1.5,
    meat: 2.0,
    salad: 0.5,
    bacon: 1.8
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            }, 
            totalPrice: 4
        }
    }

    addIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        const newCount = currentCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const currentPrice = this.state.totalPrice;
        const updatedPrice = currentPrice + INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice,
        });
    }

    removeIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        if(currentCount <= 0) {
            return;
        }
        const newCount = currentCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const currentPrice = this.state.totalPrice;
        const updatedPrice = currentPrice - INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice,
        });
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                    totalPrice={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                />

                <button>Checkout</button>
            </Aux>
        );
    }
}

export default BurgerBuilder;