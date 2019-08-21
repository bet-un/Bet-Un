import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Signup extends Component {

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
        this.authServices.signup(username, password)
            .then(theNewUser => {
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.setUser(theNewUser)
                this.props.handleModalSignup()
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            // <div className="container">
            //     <h2>Registro de usuario</h2>
            //     <form onSubmit={this.handleFormSubmit}>
            //         Usuario: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
            //         Contraseña: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>

            //         <input type="submit" value="Registrar" />
            //     </form>
            // </div>

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Usuario" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Debe contener 8 letras" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear
  </Button>
            </Form>


        )
    }
}

export default Signup