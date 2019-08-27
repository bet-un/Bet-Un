import React, { Component } from 'react'
import AuthServices from '../services/auth.services'
import Signup from '../components/auth/Signup'
import Login from '../components/auth/Login'
import { Link } from 'react-router-dom'
import { Modal, Navbar, Nav } from 'react-bootstrap'
import '../App.css';

const modalStyle = function () {
    return {

        backgroundColor: 'black',
        color: 'white',
        opacity: '.9',
        top: '20px',
        display: 'block',
        position: 'absolute',
        width: '100%',
        padding: '20px',
        borderRadius: '5%'

    };
};

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



                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Welcome, {userName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Link className="links-nav marg-lat home" to={`/`}>BetOOn</Link>
                            <Link className="links-nav marg-lat" to={`/Jornada`}>Matchday</Link>
                            <Link className="links-nav marg-lat" to={`/Clubs`}>Clubs</Link>
                            <Link className="links-nav marg-lat" to={`/LigaSantander`}>Leagues</Link>
                            <Link className="links-nav marg-lat" to={`/Apuesta`}>Bet Now!</Link>
                            <Link className="links-nav marg-lat" to={`/Perfil`}>Profile</Link>
                            <Link className="links-nav marg-lat" to={'/'} onClick={this.logout}>Log out</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            )
        } else {

            return (

                <>
                    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                    </nav> */}

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                                <Link className="links-nav marg-lat home" to={`/`}>BetOOn</Link>
                                <Link className="links-nav marg-lat" to={`/Jornada`}>Matchday</Link>
                                <Link className="links-nav marg-lat" to={`/Clubs`}>Clubs</Link>
                                <Link className="links-nav marg-lat" to={`/LigaSantander`}>Leagues</Link>

                                <button className="register-btn marg-lat" onClick={this.handleModalSignup}>Register now</button>
                                <button className="login-btn" onClick={this.handleModalLogin}>Login</button>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Modal show={this.state.showModalSignup} onHide={this.handleModalSignup}>
                        <div style={modalStyle()}>
                            <Modal.Header closeButton></Modal.Header>
                            <h4 className="center">Signup</h4>
                            <Modal.Body ><Signup handleModalSignup={this.handleModalSignup} setUser={this.props.setUser} /></Modal.Body>

                        </div>
                    </Modal>

                    <Modal show={this.state.showModalLogin} onHide={this.handleModalLogin}>
                        <div style={modalStyle()}>
                            <Modal.Header closeButton></Modal.Header>
                            <h4 className="center">Login</h4>
                            <Modal.Body><Login handleModalLogin={this.handleModalLogin} setUser={this.props.setUser} /></Modal.Body>
                        </div>
                    </Modal>
                </>



            )
        }

    }
}
export default NavBar
