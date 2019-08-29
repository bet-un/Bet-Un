import React, { Component } from 'react'
import Services from '../services/league.services'
import AuthServices from '../services/auth.services'
import ApuestaCard from './Apuesta-card'
import TickerMove from './Ticker-move'


import { Modal, Button, Form } from 'react-bootstrap'

const modalBet = function () {
    return {

        padding: '20px',
        borderRadius: '5%',
        color: 'white'

    };
};

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
            .catch(err => console.log(err))
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

    handleFormSubmit = e => {
        e.preventDefault()
        //console.log(this.state.user.balance[this.state.user.balance.length - 1])
        //console.log(this.state.cantidad)

        const dif = parseFloat(this.state.user.balance[this.state.user.balance.length - 1]) - parseFloat(this.state.cantidad)
        const bet = this.state.apuesta
        //console.log(bet, "salgo del componente")
        this.services.postBet(this.state)
            .then(newBet => {
                this.authServices.updateUser({ dif: dif, bet: newBet.data })
                    //console.log(bets)
                    .then(newuser => {
                        this.setState({ balance: newuser.balance })
                            
                                this.props.setTheUser(newuser)
                                this.forceUpdate()
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log('error', err))
    }


    //Handle del select
    handleChangeInput = e => {
        e.preventDefault()
        this.services.getPredictions(e.target.value)
            .then(response => this.setState({ apuesta: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        //const salary = this.state.cantidad
        const userName = this.state.user
        //let newSalary = (userName.balance[userName.balance.length - 1]) - salary
        //console.log(salary)
        // console.log(userName)
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
                                    <th><p>Local</p></th>
                                    <th><p>G.L.</p></th>
                                    <th><p>-</p></th>
                                    <th><p>G.V.</p></th>
                                    <th><p>Visitante</p></th>
                                    <th><p>Hora</p></th>
                                    <th><p>Fecha</p></th>
                                    <th><p>Estado</p></th>
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

                                                <Form onSubmit={this.handleFormSubmit}>
                                                    <div className="cont-bets marg-top-bot">
                                                        <div className="bets pointer">1</div><div className="bets pointer">X</div><div className="bets pointer">2</div>

                                                    </div>
                                                    <Form.Label htmlFor="input-local">Local</Form.Label>
                                                    <Form.Control name="local" type="text" id="input-local" value={this.state.local} placeholder={apuesta.match_hometeam_name} onChange={this.handleInputChange} />
                                                    <Form.Label htmlFor="input-visitante">Visitante</Form.Label>
                                                    <Form.Control name="visitante" type="text" id="input-visitante" value={this.state.visitante} placeholder={apuesta.match_awayteam_name} onChange={this.handleInputChange} />
                                                    <Form.Group controlId="formGridState">
                                                        <Form.Label htmlFor="input-apuestas">Seleccionar apuesta...</Form.Label>
                                                        <Form.Control as="select" name="apuestas" id="input-apuestas" value={this.state.apuestas} onChange={this.handleInputChange}>
                                                            <option>Choose...</option>
                                                            <option value={apuesta.prob_HW}>1 => {apuesta.prob_HW}</option>
                                                            <option value={apuesta.prob_D}>X => {apuesta.prob_D}</option>
                                                            <option value={apuesta.prob_AW}>2 => {apuesta.prob_AW}</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="input-cantidad">Cantidad</Form.Label>
                                                        <Form.Control name="cantidad" type="number" id="input-cantidad" value={this.state.cantidad} placeholder="Cantidad" onChange={this.handleInputChange} />

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
