import React, { Component } from 'react'
import Services from '../services/league.services'

import ApuestaCard from './Apuesta-card'
import '../App.css';


class Apuesta extends Component {
    constructor() {
        super()
        this.state = { apuesta: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getPredictions()
            .then(response => this.setState({ apuesta: response.data }))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <>
                <div className="container opacity">
                    <div className="row justify-content-center card">
                        <table className="table">
                            <tbody>
                                <tr className="timeM">
                                    <th><p>Local</p></th>
                                    <th><p>G.L.</p></th>
                                    <th><p>-</p></th>
                                    <th><p>G.V.</p></th>
                                    <th><p>Visitante</p></th>
                                    <th><p>Hora</p></th>
                                    <th><p>Fecha</p></th>
                                    <th><p>Estado</p></th>
                                    <th><p>Prob.V.L.</p></th>
                                    <th><p>Prob.V.V.</p></th>
                                    <th><p>Prob.E.</p></th>
                                </tr>
                                {this.state.apuesta && this.state.apuesta.map((apuesta, idx) => <ApuestaCard key={idx} {...apuesta} />)}
                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        )
    }

}
export default Apuesta
