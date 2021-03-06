import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(control => 
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    addIngredient={() => props.addIngredient(control.type)}
                    removeIngredient={() => props.removeIngredient(control.type)}
                />)
            }

            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>

            <button className={classes.OrderButton} onClick={props.updatePurchasing} disabled={props.disabled}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;