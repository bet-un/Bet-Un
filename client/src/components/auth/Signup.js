import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

import Form from 'react-bootstrap/Form'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: false
        }
        this.authServices = new AuthServices()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.authServices.signup(username, password)
            .then(theNewUser => {
                this.setState({
                    username: '',
                    password: '',
                    error: false
                })
                this.props.setUser(theNewUser)
                this.props.handleModalSignup()
            })
            .catch(err => {
                const errorState = !this.state.error
                this.setState({ error: errorState })
            })
    }

    render() {

        if (!this.state.error) {

            return (

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="formBasicUser">
                        <div className="signup-form">
                            <Form.Label className="labels">Username</Form.Label>
                            <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <div className="signup-form">
                            <Form.Label className="labels">Password</Form.Label>
                            <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <button className="form-btn" type="submit">Register</button>
                    </Form.Group>

                </Form>
            )
        } else if (this.state.password.length <= 7) {

            return (

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="formBasicUser">
                        <div className="signup-form">
                            <Form.Label className="labels">Username</Form.Label>
                            <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <div className="signup-form">
                            <Form.Label className="labels">Password</Form.Label>
                            <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <p className="warning-msg">Password must contain at least 8 characters</p>
                        <button className="form-btn-err" type="submit">Register</button>
                    </Form.Group>

                </Form>
            )

        }
        else {
            return (

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="formBasicUser">
                        <div className="signup-form">
                            <Form.Label className="labels">Username</Form.Label>
                            <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <div className="signup-form">
                            <Form.Label className="labels">Password</Form.Label>
                            <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <p className="warning-msg">User or password not available</p>
                        <button className="form-btn-err" type="submit">Register</button>
                    </Form.Group>

                </Form>
            )
        }

    }
}

export default Signup