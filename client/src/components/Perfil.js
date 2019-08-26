import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Perfil extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {/* <h4>{username}</h4> */}
                        {/* <p>Salario: {balance}</p> */}
                        <div className="col-6 botones">
                            <Link to={'/Apuesta'}><img src="../bet.png" alt="Bet" width="20%"></img></Link>
                        </div>
                        <div className="col-6 botones">
                            <Link to={'/Historico'}><img src="../his.png" alt="historico" width="16%"></img></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Perfil

