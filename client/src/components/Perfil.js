import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/league.services'
import AuthServices from '../services/auth.services'
import Historico from '../components/Historico-apuestas'
import CardForm from './Card-form'
import { Modal } from 'react-bootstrap'
//import Historico from '../components/Historico-apuestas'


import Paypal from './pay-pal'
import TickerMove from './Ticker-move'
import BetCard from './Bet-card'


const modalStyle = function () {
    return {

        backgroundColor: 'black',
        color: 'white',
        opacity: '.9',
        top: '20px',
        display: 'block',
        position: 'absolute',
        width: '100%',
        borderRadius: '5%'

    };
};

class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bets: [],
            user: [],
            showModal: false

        }
        this.services = new Services()
        this.authServices = new AuthServices()

    }
    componentDidMount = () => {
        this.showList()
    }

    showList = () => {
        this.authServices.myBets()
            .then(response => {
                //console.log(response.data)
                this.setState({ bets: response.data.bets })
                console.log(response.data.bets)
            })
        this.authServices.loggedin()
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))
    }

    handleModalCard = () => {
        const modalCard = !this.state.showModal
        this.setState({ showModal: modalCard })

    }

    render() {

        if (this.state.user.card) {
            return (
                <>
                    <div className="carousel marg-bot">
                        <TickerMove />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="botones">
                                <table className="table tables">
                                    <tbody className="timeM">
                                        <tr >
                                            <th> <Link to={'/Apuesta'}><img src="../bet.png" alt="Bet" width="15%"></img></Link></th>
                                            <th> <button className="add-other-card" onClick={this.handleModalCard}>Add other credit card</button></th>
                                            <th><h6>Salary: {userName.balance && userName.balance[userName.balance.length - 1]}€</h6></th>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* <Link to={'/Historico'}><img src="../his.png" alt="historico" width="13%"></img></Link> */}


                            </div>
                            <div className="botones">
                                {/* <Historico /> */}
                            </div>
                            <table className="table tables">
                                <tbody>
                                    <tr className="timeM">
                                        <th><p>Match</p></th>
                                        <th><p>Bet amount</p></th>
                                        <th><p>Odds</p></th>
                                    </tr>
                                    {this.state.bets && this.state.bets.map(bets => <BetCard key={bets._id} {...bets} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <Modal show={this.state.showModal} onHide={this.handleModalCard}>
                        <div style={modalStyle()}>
                            <Modal.Header closeButton></Modal.Header>
                            <h4 className="center">Register Card</h4>
                            <Modal.Body ><CardForm handleModalSignup={this.handleModalCard} setUser={this.props.setUser} /></Modal.Body>

                        </div>
                    </Modal>
                </>
            )
        }

        else {
            return (
                <>
                    <div className="carousel">
                        <TickerMove />
                    </div>
                    <div className="card-info">
                        <button className="card-btn" onClick={this.handleModalCard}>Register your credit card</button><p>you have none yet!</p>
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
                                        <th><p>Match</p></th>
                                        <th><p>Bet amount</p></th>
                                        <th><p>Odds</p></th>
                                    </tr>
                                    {this.state.bets && this.state.bets.map(bets => <BetCard key={bets._id} {...bets} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <Modal show={this.state.showModal} onHide={this.handleModalCard}>
                        <div style={modalStyle()}>
                            <Modal.Header closeButton></Modal.Header>
                            <h4 className="center">Register Card</h4>
                            <Modal.Body ><CardForm handleModalSignup={this.handleModalCard} setUser={this.props.setUser} /></Modal.Body>

                        </div>
                    </Modal>
                </>
            )
        }
    }
}


export default Perfil

