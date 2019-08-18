import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';
import Wrapper from '../../../../hoc/wrapper';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Wrapper>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={attachedClasses.join(" ")}>
                <NavigationItems />
            </div>
        </Wrapper>
    );
}

export default sideDrawer;