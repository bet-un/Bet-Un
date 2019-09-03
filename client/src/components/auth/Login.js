import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'
import { Form } from 'react-bootstrap'
import warn from '../../warn-rojo.png'

class Login extends Component {

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
        this.authServices.login(username, password)
            .then(theLoggedUser => {
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.setUser(theLoggedUser)
                this.props.handleModalLogin()
            })

            .catch(err => {
                const errorState = !this.state.error
                this.setState({ error: errorState })
            })
    }

    render() {

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
                    {this.state.error ?
                        <div className="warn">
                            <img src={warn} alt="Warning" /><p className="warning-msg">Incorrect user or password</p>
                        </div> : null
                    }
                    <button className="form-btn-err" type="submit">Login</button>
                </Form.Group>
            </Form>

        )
    }

}


export default Login