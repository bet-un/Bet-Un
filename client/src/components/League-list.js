import React, { Component } from 'react'
import Services from '../services/league.services'
//import { Link } from 'react-router-dom'
import TickerMove from './Ticker-move'
import LeagueCard from './League-card'
import '../bg.css';



class LeagueList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leagues: [],
            liga: ""
        }
        this.services = new Services()
    }

    handleChangeInput = e => {
        e.preventDefault()
        this.services.getLeagues(e.target.value)
            .then(response => this.setState({ leagues: response.data }))
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
                        <img src="../laliga-santander-v-1200x1200_2018.png" alt="Liga" width="15%"></img>
                        <img src="../Premier League.png" alt="Liga" width="15%"></img>
                        <img src="../ligue_1.png" alt="Liga" width="15%"></img>
                        <img src="../bundesliga.png" alt="Liga" width="15%"></img>
                        <img src="../serie-a.png" alt="Liga" width="15%"></img>
                        <img src="../erediv.png" alt="Liga" width="12%"></img>
                    </div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group linea">
                            <label htmlFor="ligas"></label>
                            <select name="liga" className="form-control" id="ligas" value={this.state.liga} onChange={(e) => { this.handleChangeInput(e) }}>
                                <option>Leagues</option>
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

