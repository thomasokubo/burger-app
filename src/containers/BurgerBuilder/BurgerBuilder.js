import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import PurchaseSummary from '../../components/Burger/PurchaseSummary/PurchaseSummary';

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
            totalPrice: 4,
            purchasable: false,
            purchasing: false
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
        this.purchaseHandler(updatedIngredients);
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
        this.purchaseHandler(updatedIngredients);
    }

    purchaseHandler = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingKey => ingredients[ingKey])
            .reduce((sum, el) => {
                return sum += el;
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    updatePurchasingHandler = () => {
        this.setState({
            purchasing: !this.state.purchasing,
        });
    }

    render() {
        return (
            <Aux>
                <Modal visible={this.state.purchasing}>
                    <PurchaseSummary 
                        ingredients={this.state.ingredients}
                        updatePurchasing={this.updatePurchasingHandler}
                    />
                </Modal>

                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                    totalPrice={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={!this.state.purchasable}
                    ingredients={this.state.ingredients}
                    updatePurchasing={this.updatePurchasingHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;












