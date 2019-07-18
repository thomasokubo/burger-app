import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.module.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_, i) => {
                return <Ingredient type={ingredient} key={ingredient + i}/>;
            });
        })
        .reduce((arr, curr) => {
            return arr.concat(curr);
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type='bread-top'/>
            {transformedIngredients}
            <Ingredient type='bread-bottom'/>
        </div>
    );
};

export default burger;