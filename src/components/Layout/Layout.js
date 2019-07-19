import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from './Layout.module.css';
import Toolbar from '../UI/Toolbar/Toolbar';

const layout = (props) => (
    <Wrapper>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;