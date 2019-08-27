import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/league.services'


import BetCard from './Bet-card'

class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bets: []
        }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getBets()
            .then(response => this.setState({ bets: response.data }))
            .catch(err => console.log(err))
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
                        <table className="table">
                            <tbody>
                                <tr className="timeM">
                                    <th><p>Partido</p></th>
                                    <th><p>Cantidad apostada:</p></th>
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

