import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthServices from '../services/auth.services'


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
    }

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
            })
            .catch(err => console.log(err))
    }


    render() {

        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'


        if (this.props.userInSession) {
            return (


                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="navbar-brand mb-0 h1" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/LigaSantander`} className="navbar-brand mb-0 h1">Liga Santander</Link>
                                <Link to={`/Clubs`} className="navbar-brand mb-0 h1">Clubs</Link>
                                <Link to={`/Jornada`} className="navbar-brand mb-0 h1">Jornada</Link>
                            </li>
                            <li className="nav-item justify-content-right"><span className="nav-link">Bienvenid@, {saludo}</span></li>
                            <li className="nav-item justify-content-right" onClick={this.logout}><span className="nav-link" >Cerrar sesión</span></li>


                        </ul>
                    </div>
                </nav>


            )
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="navbar-brand mb-0 h1" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="navbar-brand mb-0 h1" to={'/login'}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand mb-0 h1" to={'/signup'}>Signup</Link>
                            </li>

                        </ul>
                    </div>
                </nav>



            )
        }

    }
}
export default NavBar