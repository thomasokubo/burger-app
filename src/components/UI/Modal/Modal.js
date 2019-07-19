import React from 'react';
import classes from './Modal.module.css'
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    if(props.visible) {
        return (
            <Wrapper>
                <Backdrop show={props.visible} clicked={props.closeModal}/>
                <div className={classes.Modal}>
                    {props.children}
                </div>
            </Wrapper>
        );
    }
    return null;
}


export default modal;