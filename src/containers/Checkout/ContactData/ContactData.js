import React, { Component } from 'react';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {

    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        }
    };

    render () {
        return (
            <div className={ styles.ContactData  }>
                <h4>Enter your Contact Data</h4>

                <form>
                    <input type="text" name="name" placeholder="Your Name" className={styles.Input} /> <br/>

                    <input type="e-mail" name="e-mail" placeholder="Your E-mail" className={styles.Input} /> <br/>

                    <input type="text" name="street" placeholder="Your Street" className={styles.Input} /> <br/>

                    <input type="text" name="postal" placeholder="Your Postal Code" className={styles.Input} /> <br/>

                    <Button btnType="Success">Send</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;