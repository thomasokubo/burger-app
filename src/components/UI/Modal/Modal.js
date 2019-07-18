import React from 'react';
import classes from './Modal.module.css'

const modal = (props) => {
    if(props.visible) {
        return (
            <div className={classes.Modal}>
                {props.children}
            </div>
        );
    }
    return null;
}


export default modal;