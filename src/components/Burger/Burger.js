import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.module.css';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_,i) => {
                return <Ingredient type={ingredient} key={ingredient + i}/>;
            });
        });

    return (
        <div className={classes.Burger}>
            <Ingredient type='bread-top'/>
            {transformedIngredients}
            <Ingredient type='bread-bottom'/>
        </div>
    );
};

export default burger;