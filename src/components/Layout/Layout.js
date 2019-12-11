import React, {Component} from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from './Layout.module.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false,
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Wrapper>
                <Toolbar toggleDrawer={this.sideDrawerToggleHandler}/>
                <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;