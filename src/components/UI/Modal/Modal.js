import React, {Component} from 'react';
import classes from './Modal.module.css'
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.visible !== this.props.visible;
    }

    render() {  
        if(this.props.visible) {
            return (
                <Wrapper>
                    <Backdrop show={this.props.visible} clicked={this.props.closeModal}/>
                    <div className={classes.Modal}>
                        {this.props.children}
                    </div>
                </Wrapper>
            );
        }
        return null;
    }
}

export default Modal;