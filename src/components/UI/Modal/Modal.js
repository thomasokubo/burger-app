import React from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    if(props.visible) {
        return (
            <Aux>
                <Backdrop show={props.visible} clicked={props.closeModal}/>
                <div className={classes.Modal}>
                    {props.children}
                </div>
            </Aux>
        );
    }
    return null;
}


export default modal;