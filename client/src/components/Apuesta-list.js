import React, { Component } from 'react'
import Services from '../services/league.services'

import ApuestaCard from './Apuesta-card'

// import '../App.css';

import { Modal, Button, Form } from 'react-bootstrap'

class Apuesta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apuesta: [],
            copy: [],
            showModal: [],
            cantidad: '',
            apuestas: '',
            local: '',
            visitante: ''
        }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getPredictions()
            .then(response => this.setState({ apuesta: response.data, copy: response.data, showModal: Array(response.data.length - 1).fill(false) }))
            .catch(err => console.log(err))
    }

    handleModal = (e, index) => {
        const modal = !this.state.showModal[index]
        const copy = [...this.state.showModal]
        copy[index] = modal
        this.setState({ ...this.state, showModal: copy })
    }

    // handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    // handleFormSubmit = e => {
    //     e.preventDefault()
    //     this.services.getPredictions(this.state.liga)
    //         .then(response => this.setState({ apuesta: response.data }))
    //         .catch(err => console.log(err))
    // }


    // Handle del Form
 
      handleInputChange= (e) => {
        const { name, value } = e.target

        this.setState({ ...this.state, [name]: value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.services.postBet(this.state)
            .then(x => {
                
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
        return (
            <>
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
                                    <th><p>Prob.V.L.</p></th>
                                    <th><p>Prob.V.V.</p></th>
                                    <th><p>Prob.E.</p></th>
                                </tr>

                                {this.state.apuesta && this.state.apuesta.map((apuesta, idx) => {
                                    return (<>
                                        <ApuestaCard key={idx} {...apuesta} onClick={(e) => this.handleModal(e, idx)} />

                                        <Modal centered size="lg" show={this.state.showModal[idx]} onHide={(e) => this.handleModal(e, idx)}>
                                            <h3 className="center marg-top">{apuesta.match_hometeam_name} - {apuesta.match_awayteam_name} </h3>
                                            <Modal.Body>
                                                <h4 className="center">Bet</h4>


                                                <Form onSubmit={this.handleFormSubmit}>
                                                    <div className="cont-bets marg-top-bot">
                                                        <div className="bets pointer">1</div><div className="bets pointer">X</div><div className="bets pointer">2</div>

                                                    </div>
                                                    <Form.Label htmlFor="input-local">Local</Form.Label>
                                                    <Form.Control name="local" type="text" id="input-local" value={this.state.local} placeholder={apuesta.match_hometeam_name} onChange={this.handleInputChange}/>
                                                    <Form.Label htmlFor="input-visitante">Visitante</Form.Label>
                                                    <Form.Control name="visitante" type="text" id="input-visitante" value={this.state.visitante} placeholder={apuesta.match_awayteam_name} onChange={this.handleInputChange}/>
                                                    <Form.Group controlId="formGridState">
                                                        <Form.Label htmlFor="input-apuestas">Seleccionar apuesta...</Form.Label>
                                                        <Form.Control as="select" name="apuestas" id="input-apuestas" value={this.state.apuestas} onChange={this.handleInputChange}>
                                                            <option>Choose...</option>
                                                            <option value={apuesta.prob_HW} >1 => {apuesta.prob_HW}</option>
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
                                                    Cerrar
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
