import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => (
    <div className={styles.CheckoutSummary}>
        <h1>What an incredible burger!</h1>
        <div style={{width: '100%', height: '300px', margin: 'auto'}}>
            <Burger ingredients={props.ingredients  } />
        </div>
        <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>
        <Button btnType='Success' clicked={props.continue}>Continue</Button>
    </div>
);

export default checkoutSummary;