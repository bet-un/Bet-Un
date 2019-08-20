import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link to="/" className="navbar-brand mb-0 h1">Inicio</Link>
            <Link to={`/LigaSantander`} className="navbar-brand mb-0 h1">Liga Santander</Link>
            <Link to={`/Clubs`} className="navbar-brand mb-0 h1">Clubs</Link>
        </nav>

    )


}

export default Nav