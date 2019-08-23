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
                        <div className="col-6 botones">
                            <Link><img src="../bet.png" alt="Bet" width="20%"></img></Link>

                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Perfil