import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/league.services'
import AuthServices from '../services/auth.services'
//import Historico from '../components/Historico-apuestas'


import TickerMove from './Ticker-move'
import BetCard from './Bet-card'


class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bets: [],
            user: []

        }
        this.services = new Services()
        this.authServices = new AuthServices()

    }

    componentDidMount() {
        this.authServices.loggedin()
            .then(response => this.setState({ user: response.data }))
        this.services.getBets()
            .then(response => this.setState({ bets: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        const userName = this.state.user

        return (
            <>
                <div className="carousel marg-bot">
                    <TickerMove />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 botones">
                            {/* <Link to={'/Historico'}><img src="../his.png" alt="historico" width="13%"></img></Link> */}
                            <Link to={'/Apuesta'}><img src="../bet.png" alt="Bet" width="15%"></img></Link>
                            <h5>User: {userName.username && userName.username}</h5>
                            <h6>Salary: {userName.balance && userName.balance[userName.balance.length - 1]}€</h6>
                        </div>
                        <div className="col-md-6 botones">
                            {/* <Historico /> */}
                        </div>
                        <table className="table tables">
                            <tbody>
                                <tr className="timeM">
                                    <th><p>Partido</p></th>
                                    <th><p>Cantidad apostada</p></th>
                                    <th><p>Cantidad por euro apostado</p></th>
                                </tr>
                                {this.state.bets && this.state.bets.map(bets => <BetCard key={bets._id} {...bets} />)}
                            </tbody>
                        </table>

                    </div>
                </div>
            </>
        )
    }
}
export default Perfil

