import React, { Component } from 'react'
import Services from '../services/league.services'
//import { Link } from 'react-router-dom'
import Partido from './Partido'

class Jornada extends Component {

    constructor() {
        super()
        this.state = { jornadas: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getJornada()
            .then(response => this.setState({ jornadas: response.data }))
            .catch(err => console.log(err))
        console.log(this.state.jornadas)
    }
    render() {

        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <img src="../logo192.png" alt="Liga" width="10%"></img>
                    </div>
                    {/* <input id="start" type="date" />Desde <input id="end" type="date" />Hasta */}
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Local</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Visitante</th>
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>Posesion</th>
                            </tr>
                            {this.state.jornadas && this.state.jornadas.map((jornada, idx) => <Partido key={idx} {...jornada} />)}
                        </tbody>
                    </table>

                </div>
            </>
        )
    }
}
export default Jornada