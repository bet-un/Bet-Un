import React, { Component } from 'react'
import Services from '../services/league.services'
//import { Link } from 'react-router-dom'

import LeagueCard from './League-card'
import '../App.css';



class LeagueList extends Component {

    constructor() {
        super()
        this.state = { leagues: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getLeagues()
            .then(response => this.setState({ leagues: response.data }))
            .catch(err => console.log(err))
    }
    render() {

        return (
            <>
                <div className="container opacity">
                    <div className="row justify-content-center">
                        <img src="../laliga-santander-v-1200x1200_2018.png" alt="Liga" width="15%"></img>
                    </div>
                    <select name="liga" class="form-control" id="ligas" defaultValue="468" placeholder="468">
                        <option value="468">Liga Santander</option>
                        <option value="148">Premier League</option>
                    </select>
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

