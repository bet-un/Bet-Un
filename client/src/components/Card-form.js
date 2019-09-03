import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

import { Form } from 'react-bootstrap'


class CardForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card: false
        }
        this.authServices = new AuthServices()
    }

    handleInputChange = e => {


    }

    handleFormSubmit = e => {
        e.preventDefault()
        const cardState = !this.state.card
        this.authServices.updateUseCard(cardState)
            .then(newuser => {
                this.props.setUser(newuser)
                this.setState({ card: cardState })
                // this.forceUpdate()

            })
            .catch(err => console.log(err, 'primer catch'))
            .catch(err => {
                this.setState(console.log(err, 'segundo catch'))
            })
    }

    render() {

        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formBasicCardNumber">
                    <div className="signup-form">
                        <Form.Label className="labels">Number</Form.Label>
                        <Form.Control name="number" type="number" onChange={this.handleInputChange} />
                    </div>
                </Form.Group>

                <Form.Group controlId="formBasicCardDate">
                    <div className="signup-form card-form date-form">
                        <Form.Label className="labels">Date</Form.Label>
                        <Form.Control name="numberdate" type="number" onChange={this.handleInputChange} />
                    </div>
                </Form.Group>

                <Form.Group controlId="formBasicCardCV">
                    <div className="signup-form card-form">
                        <Form.Label className="labels">CV</Form.Label>
                        <Form.Control name="numbersecret" type="password" onChange={this.handleInputChange} />
                    </div>
                    <button className="form-btn" type="submit"> Enter card</button>
                </Form.Group>
            </Form >

        )
    }
}

export default CardForm