import React, {Component} from 'react'
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger Preview</div>

                <div>Burger Controls</div>

                <button>Checkout</button>
            </Aux>
        );
    }
}

export default BurgerBuilder;