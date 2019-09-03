import React, { Component } from 'react'
import AuthServices from '../services/auth.services'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import { Link } from 'react-router-dom'
import { Modal, Navbar } from 'react-bootstrap'
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

            if (this.props.userInSession.data.username === 'ironhack') {

                return (

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Link className="links-nav marg-lat home" to={`/`}><img src="../logoApp.png" alt="logoApp"></img></Link>
                            <Link className="links-nav marg-lat" to={`/Jornada`}>Matchday</Link>
                            <Link className="links-nav marg-lat" to={`/Clubs`}>Clubs</Link>
                            <Link className="links-nav marg-lat" to={`/LigaSantander`}>Leagues</Link>
                            <Link className="links-nav marg-lat" to={`/Apuesta`}>Bet Now!</Link>
                            <Link className="links-nav marg-lat" to={`/Secret`}>IH</Link>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <Link className="links-nav marg-lat" to={`/Perfil`}>Profile</Link>
                            <Link className="links-nav marg-lat" to={'/'} onClick={this.logout}>Log out</Link>
                            <small className="nav-small">Welcome {userName}</small>
                        </Navbar.Collapse>
                    </Navbar>

                )
            } else {
                return (

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Link className="links-nav marg-lat home" to={`/`}><img src="../logoApp.png" alt="logoApp"></img></Link>
                            <Link className="links-nav marg-lat" to={`/Jornada`}>Matchday</Link>
                            <Link className="links-nav marg-lat" to={`/Clubs`}>Clubs</Link>
                            <Link className="links-nav marg-lat" to={`/LigaSantander`}>Leagues</Link>
                            <Link className="links-nav marg-lat" to={`/Apuesta`}>Bet Now!</Link>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <Link className="links-nav marg-lat" to={`/Perfil`}>Profile</Link>
                            <Link className="links-nav marg-lat" to={'/'} onClick={this.logout}>Log out</Link>
                            <small className="nav-small">Welcome {userName}</small>
                        </Navbar.Collapse>
                    </Navbar>

                )
            }
        }

        else {

            return (

                <>

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Link className="links-nav marg-lat home" to={`/`}><img src="../logoApp.png" alt="logoApp"></img></Link>
                            <Link className="links-nav marg-lat" to={`/Jornada`}>Matchday</Link>
                            <Link className="links-nav marg-lat" to={`/Clubs`}>Clubs</Link>
                            <Link className="links-nav marg-lat" to={`/LigaSantander`}>Leagues</Link>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">

                            <button className="register-btn marg-lat" onClick={this.handleModalSignup}>Register now</button>
                            <button className="login-btn" onClick={this.handleModalLogin}>Login</button>
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
