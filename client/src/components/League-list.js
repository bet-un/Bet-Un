import React, { Component } from 'react'
import Services from '../services/league.services'
//import { Link } from 'react-router-dom'

import LeagueCard from './League-card'
import '../App.css';



class LeagueList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leagues: [],
            liga: ""
        }
        this.services = new Services()
    }

    // componentDidMount() {
    //     this.services.getLeagues()
    //         .then(response => this.setState({ leagues: response.data }))
    //         .catch(err => console.log(err))
    // }
    handleChangeInput = e => { this.setState({ [e.target.name]: e.target.value }) }

    handleFormSubmit = e => {
        e.preventDefault()
        this.services.getLeagues(this.state.liga)
            .then(response => this.setState({ leagues: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state)
        return (
            <>
                <div className="container opacity">
                    <div className="row justify-content-center">
                        <img src="../laliga-santander-v-1200x1200_2018.png" alt="Liga" width="15%"></img>
                        <img src="../Premier League.png" alt="Liga" width="15%"></img>
                        <img src="../ligue_1.png" alt="Liga" width="15%"></img>
                        <img src="../bundesliga.png" alt="Liga" width="15%"></img>
                        <img src="../serie-a.png" alt="Liga" width="15%"></img>

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
                            </select>
                            <button type="submit" className="btn btn-dark btn-sm">Seleccionar</button>
                        </div>
                    </form>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Clasificación</th>
                                <th>Equipo</th>
                                <th>P.J.</th>
                                <th>P.P.</th>
                                <th>P.G.</th>
                                <th>P.E.</th>
                                <th>G.F.</th>
                                <th>G.C.</th>
                                <th>Puntos</th>
                            </tr>
                            {this.state.leagues && this.state.leagues.map((league, idx) => <LeagueCard key={idx} {...league} />)}
                        </tbody>
                    </table>

                </div>
            </>
        )
    }
}

export default LeagueList

