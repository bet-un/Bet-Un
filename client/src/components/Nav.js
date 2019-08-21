import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthServices from '../services/auth.services'
import Signup from '../components/auth/Signup'
import Login from '../components/auth/Login'

import { Modal, Button } from 'react-bootstrap'

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
        this.state = {
            showModalSignup: false,
            showModalLogin: false
        }
    }

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
            })
            .catch(err => console.log(err))
    }

    handleModalSignup = () => {
        const modalSignup = !this.state.showModalSignup
        this.setState({ showModalSignup: modalSignup })

    }

    handleModalLogin = () => {
        const modalLogin = !this.state.showModalLogin
        this.setState({ showModalLogin: modalLogin })

    }



    render() {

        if (this.props.userInSession) {
            const userName = this.props.userInSession.data.username

            return (


                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><span className="navbar-brand mb-0 h4">Hola de nuevo, {userName} |</span></li>
                            <li className="nav-item active">
                                <Link className="navbar-brand mb-0 h1" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/LigaSantander`} className="navbar-brand mb-0 h1">Liga Santander</Link>
                                <Link to={`/Clubs`} className="navbar-brand mb-0 h1">Clubs</Link>
                                <Link to={`/Jornada`} className="navbar-brand mb-0 h1">Jornada</Link>
                            </li>

                            <li className="nav-item justify-content-right" onClick={this.logout}><span className="nav-link pointer" >Cerrar sesión</span></li>


                        </ul>
                    </div>
                </nav>


            )
        } else {

            return (

                <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active marg-lat">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>

                                <li className="nav-item marg-lat">
                                    <Button variant="primary" onClick={this.handleModalLogin}>Login</Button>
                                </li>
                                <li className="nav-item marg-lat">
                                    <Button variant="primary" onClick={this.handleModalSignup}>Signup</Button>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Modal show={this.state.showModalSignup} onHide={this.handleModalSignup}>
                        <Modal.Header closeButton>
                            <Modal.Title>Crear nuevo usuario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Signup handleModalSignup={this.handleModalSignup} setUser={this.props.setUser} /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleModalSignup}>
                                Cerrar
                           </Button>

                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.showModalLogin} onHide={this.handleModalLogin}>
                        <Modal.Header closeButton>
                            <Modal.Title>Entrar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Login handleModalLogin={this.handleModalLogin} setUser={this.props.setUser} /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleModalLogin}>
                                Cerrar
                           </Button>

                        </Modal.Footer>
                    </Modal>
                </>



            )
        }

    }
}
export default NavBar
