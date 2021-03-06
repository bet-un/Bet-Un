import React, { Component } from 'react'
import Services from '../services/league.services'
//import { Link } from 'react-router-dom'
import Partido from './Partido'
import TickerMove from './Ticker-move'
import '../bg.css';

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

    }
    // handleChangeInput = e => { this.setState({ [e.target.name]: e.target.value }) }

    // handleFormSubmit = e => {
    //     e.preventDefault()
    //     this.services.getJornada(this.state.liga)
    //         .then(response => this.setState({ jornadas: response.data }))
    //         .catch(err => console.log(err))
    // }
    handleChangeInput = e => {
        e.preventDefault()
        this.services.getJornada(e.target.value)
            .then(response => this.setState({ jornadas: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <div className="carousel marg-bot">
                    <TickerMove />
                </div>

                <div className="container tables">
                    <div className="row justify-content-center">
                        <img src="../logo192.png" alt="Liga" width="10%"></img>
                    </div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group linea">
                            <label htmlFor="ligas"></label>
                            <select name="liga" className="form-control" id="ligas" value={this.state.liga} onChange={this.handleChangeInput}>
                                <option></option>
                                <option value="468">Liga Santander</option>
                                <option value="148">Premier League</option>
                                <option value="176">Ligue 1</option>
                                <option value="195">Bundesliga</option>
                                <option value="262">Serie A</option>
                                <option value="343">Eredivisie</option>
                            </select>
                        </div>
                    </form>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Hometeam</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Awayteam</th>
                                <th>Time</th>
                                <th>State</th>
                                <th>Posession</th>
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