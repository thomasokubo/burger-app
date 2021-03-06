import React, {Component} from 'react';
import Wrapper from '../../hoc/wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import PurchaseSummary from '../../components/Burger/PurchaseSummary/PurchaseSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

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
            purchasing: false,
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
            purchasing: true,
        });
    }

    cancelPurchase = () => {
        this.setState({
            purchasing: false,
        });
    }

    purchaseContinueHandler = () => {
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {

        let modalContent = (
            <PurchaseSummary 
                ingredients={this.state.ingredients}
                closeModal={this.cancelPurchase}
                purchaseOrder={this.purchaseContinueHandler}
            />
        );
        if(this.state.loading) {
            modalContent = <Spinner />
        }

        return (
            <Wrapper>
                <Modal visible={this.state.purchasing} closeModal={this.cancelPurchase}>
                    {modalContent}
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
            </Wrapper>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);