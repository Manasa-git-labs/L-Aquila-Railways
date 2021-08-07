import React, { useState } from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react';

export default function Payment(props) {
    const [payment, setPayment] = useState('Cash On Delivery');

    const handleChange = (e, { value }) => setPayment(value);

    const handleClick = () => {
        props.onSelectPaymentType(payment);
    }

    const handleBackClick = (event) => {
        props.onBackClick(event.target.value)
    }

    return (
        <div style={{ margin: '2rem 0rem 2rem 2rem' }}>
            <Form.Group>
                <Checkbox
                    radio
                    // label='Credit Card'
                    name='checkboxRadioGroup'
                    value='Credit Card'
                    checked={payment === 'Credit Card'}
                    onChange={handleChange} />
                <label><h3>Credit Card</h3></label>
            </Form.Group>
            <br />
            <Form.Group>
                <Checkbox
                    radio
                    // label='UPI Payment'
                    name='checkboxRadioGroup'
                    value='Debit Card'
                    checked={payment === 'Debit Card'}
                    onChange={handleChange} />
                <label><h3>Debit Card</h3></label>
            </Form.Group>
            <br />
            <Form.Group>
                <Checkbox
                    radio
                    // label='Choose this'
                    name='checkboxRadioGroup'
                    value='UPI'
                    checked={payment === 'UPI'}
                    onChange={handleChange} />
                <label><h3>UPI Payment</h3></label>
            </Form.Group >
            <br />
            <Form.Group>
                <Checkbox
                    radio
                    // label='Cash on delivery'
                    name='checkboxRadioGroup'
                    value='Cash On Delivery'
                    checked={payment === 'Cash On Delivery'}
                    onChange={handleChange} />
                <label><h3>Cash on Delivery</h3></label>
            </Form.Group>
            <Form.Group>
                <Button positive value="details" floated="left" onClick={handleBackClick} style={{ margin: '1rem' }} >Back</Button>
                <Button color='primary'
                    floated='right'
                    style={{ margin: '1rem', padding: '1rem 2rem' }}
                    onClick={handleClick} >Total Amount: ${props.finalAmount}
                </Button>
            </Form.Group>
        </div >
    )
}
