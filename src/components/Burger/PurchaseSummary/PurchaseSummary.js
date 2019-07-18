import React from 'react';
import classes from './PurchaseSummary.module.css';

const purchaseSummary = (props) => {

    const updatedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    {ingKey.charAt(0).toUpperCase() + ingKey.slice(1)}: {props.ingredients[ingKey]}
                </li>
            );
        });

    return (
        <div>
            <h3>Checkout your order</h3>
            <ul>
                {updatedIngredients}
            </ul>
            <button onClick={props.closeModal}>Cancel</button>
            <button onClick={() => alert('Order confirmed')}>Continue</button>
        </div>
    );

}

export default purchaseSummary;