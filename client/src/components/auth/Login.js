import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
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

            .catch(err => console.log(err))
    }

    render() {

        return (
            // <div className="container">
            //     <h2>Inicio de sesión de usuario</h2>
            //     <form onSubmit={this.handleFormSubmit}>
            //         Usuario: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
            //         Contraseña: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>

            //         <input type="submit" value="Iniciar sesión" />
            //     </form>
            // </div>

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Nombre de usuario" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Contraseña" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Iniciar sesión
  </Button>
            </Form>

        )
    }
}

export default Login