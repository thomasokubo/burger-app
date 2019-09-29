import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon:0
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
 
        for(let param of query.entries()) {
            ingredients[param[0]] = +param[1];
            console.log("teste " +param[0] + " : " + param[1])
        }

        this.setState({ingredients: ingredients});
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

                    {/* <Route path={this.props.match.url + '/contact-data'} /> */}
                    <ContactData />
            </div>
        );
    }
}

export default Checkout;