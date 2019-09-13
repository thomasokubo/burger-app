import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            cheese: 1,
            meat: 1,
            salad: 1,
            bacon:1
        }
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    cancel={this.cancelCheckoutHandler}
                    continue={this.continueCheckoutHandler} />
            </div>
        );
    }
}

export default Checkout;