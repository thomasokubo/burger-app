import React from 'react';
import classes from './PurchaseSummary.module.css';
import Button from '../../UI/Button/Button';

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
        <div className={classes.PurchaseSummary}>
            <h3>Your order</h3>
            <ul>
                {updatedIngredients}
            </ul>

            <p><strong>Checkout to continue?</strong></p>
            <Button btnType='Danger' clicked={props.closeModal}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseOrder}>Continue</Button>
        </div>
    );

}

export default purchaseSummary;