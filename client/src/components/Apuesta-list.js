import React, { Component } from 'react'
import Services from '../services/league.services'
import AuthServices from '../services/auth.services'
import ApuestaCard from './Apuesta-card'
import TickerMove from './Ticker-move'


import { Modal, Button, Form } from 'react-bootstrap'

class Apuesta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apuesta: [],
            copy: [],
            showModal: [],
            user: [],
            balance: '',
            cantidad: '',
            apuestas: '',
            local: '',
            visitante: '',
            unoxdos: ''
        }
        this.services = new Services()
        this.authServices = new AuthServices()
    }

    componentDidMount() {
        this.services.getPredictions()
            .then(response => this.setState({ apuesta: response.data, copy: response.data, showModal: Array(response.data.length - 1).fill(false) }))
            .catch(err => console.log({ err }))
        this.authServices.loggedin()
            .then(response => this.setState({ user: response.data }))
    }

    handleModal = (e, index) => {
        const modal = !this.state.showModal[index]
        const copy = [...this.state.showModal]
        copy[index] = modal
        this.setState({ ...this.state, showModal: copy })
    }


    // Handle del Form
    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleFormSubmit = (e, idx) => {
        e.preventDefault()
        // if (this.state.apuestas && this.state.apuestas) {
        //     if (this.state.apuestas == this.state.apuesta.prob_HW) {
        //         this.state.unoxdos = "1"
        //     } else if (this.state.apuestas == this.state.apuesta.prob_AW) {
        //         this.state.unoxdos = "2"
        //     } else{
        //         this.state.unoxdos = "X"
        //     }
        // }
        // (this.state.apuestas && this.state.apuestas)
        const dif = parseFloat(this.state.user.balance[this.state.user.balance.length - 1]) - parseFloat(this.state.cantidad)
        //const uxd = document.getElementById("unoxdos").textContent
        const local = this.state.apuesta[idx].match_hometeam_name
        const visitante = this.state.apuesta[idx].match_awayteam_name
        const uno = this.state.apuesta[idx].prob_HW
        const dos = this.state.apuesta[idx].prob_AW
        const equis = this.state.apuesta[idx].prob_D
        //const udx = this.state.unoxdos
        //console.log(udx)
        this.setState({ local, visitante, uno, dos, equis }, () => {

            this.services.postBet(this.state)

                .then(newBet => {
                    this.authServices.updateUser({ dif: dif, bet: newBet.data })
                        .then(newuser => {
                            this.setState({ balance: newuser.balance })

                            this.forceUpdate()

                        })
                        .catch(err => console.log({ err }))
                })
                .catch(err => console.log('error', { err }))

        })

    }



    handleChangeInput = e => {
        e.preventDefault()
        this.services.getPredictions(e.target.value)
            .then(response => this.setState({ apuesta: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        const userName = this.state.user
        // const uxd = document.getElementById("unoxdos").textContent
        return (
            <>
                <div className="carousel marg-bot">
                    <TickerMove />
                </div>

                <div className="container tables">
                    <div className="row justify-content-center">
                        <form >
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
                                <tr className="timeM">
                                    <th><p>Hometeam</p></th>
                                    <th><p>H.G</p></th>
                                    <th><p>-</p></th>
                                    <th><p>A.G</p></th>
                                    <th><p>Awayteam</p></th>
                                    <th><p>Time</p></th>
                                    <th><p>Date</p></th>
                                    <th><p>State</p></th>
                                    <th><p>1</p></th>
                                    <th><p>X</p></th>
                                    <th><p>2</p></th>
                                </tr>

                                {this.state.apuesta && this.state.apuesta.map((apuesta, idx) => {
                                    return (<>
                                        <ApuestaCard key={idx} {...apuesta} onClick={(e) => this.handleModal(e, idx)} />

                                        <Modal centered size="lg" show={this.state.showModal[idx]} onHide={(e) => this.handleModal(e, idx)}>
                                            <Modal.Header closeButton></Modal.Header>
                                            <h3 className="center marg-top apuModal">{apuesta.match_hometeam_name} - {apuesta.match_awayteam_name} </h3>
                                            <Modal.Body>
                                                <h4 className="center apuModal">Bet</h4>
                                                <h5 className="apuModal">Salary: {userName.balance && userName.balance[userName.balance.length - 1]}€</h5>

                                                <Form key={idx} onSubmit={(e) => this.handleFormSubmit(e, idx)}>
                                                    <div className="cont-bets marg-top-bot">
                                                        <div className="bets">1</div><div className="bets">X</div><div className="bets">2</div>

                                                    </div>

                                                    <Form.Group >
                                                        <Form.Label ></Form.Label>
                                                        <Form.Control as="select" id="unoxdos" name="unoxdos" value={this.state.unoxdos} onChange={this.handleInputChange}>
                                                            <option>Choose...</option>
                                                            <option value="1">1 => {apuesta.prob_HW}</option>
                                                            <option value="X">X => {apuesta.prob_D}</option>
                                                            <option value="2">2 => {apuesta.prob_AW}</option>
                                                        </Form.Control>


                                                    </Form.Group>
                                                    <div className="form-group">
                                                        <Form.Label ></Form.Label>
                                                        <Form.Control name="cantidad" type="number" value={this.state.cantidad} placeholder="Bet amount" onChange={this.handleInputChange} />

                                                    </div>
                                                    <div className="d-flex flex-column marg-top">
                                                        <Button variant="dark" type="submit" onClick={e => this.handleModal(e, idx)}>BET!</Button>
                                                    </div>
                                                </Form>


                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={e => this.handleModal(e, idx)}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        )
    }

}
export default Apuesta
