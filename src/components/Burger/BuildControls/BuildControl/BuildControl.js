import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <label className={classes.Label}>{props.label}</label>
        <button className={classes.More} onClick={props.addIngredient}>More</button>
        <button className={classes.Less} onClick={props.removeIngredient}>Less</button>
    </div>
);

export default buildControl;