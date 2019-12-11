import React, { Component } from 'react';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'George Bluetooth',
                address: {
                    street: 'Pitanga, 123',
                    zipCode: '123456',
                    country: 'Portugal'
                },
                email: 'gbluetooth@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/order.js', order) 
            .then(response => {
                this.setState({
                    loading: false,
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                this.props.history.push('/');
            });
    }

    render () {
        return (
            <div className={ styles.ContactData  }>
                <Modal visible={this.state.loading} >
                    <Spinner />
                </Modal>

                <h4>Enter your Contact Data</h4>

                <form>
                    <input type="text" name="name" placeholder="Your Name" className={styles.Input} /> <br/>

                    <input type="e-mail" name="e-mail" placeholder="Your E-mail" className={styles.Input} /> <br/>

                    <input type="text" name="street" placeholder="Your Street" className={styles.Input} /> <br/>

                    <input type="text" name="postal" placeholder="Your Postal Code" className={styles.Input} /> <br/>

                    <Button btnType="Success" clicked={this.orderHandler}> Send </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;