import React, { Component } from 'react'
import Services from '../services/league.services'

import ApuestaCard from './Apuesta-card'
import '../App.css';

import { Modal, Button } from 'react-bootstrap'

class Apuesta extends Component {
    constructor() {
        super()
        this.state = {
            apuesta: [],
            copy: [],
            showModal: []
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

    render() {
        return (
            <>
                <div className="container opacity">
                    <div className="row justify-content-center card">
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
                                {this.state.copy && this.state.apuesta.map((apuesta, idx) => {
                                    return (<>
                                        <ApuestaCard key={idx} {...apuesta} onClick={(e) => this.handleModal(e, idx)} />

                                        <Modal centered size="lg" show={this.state.showModal[idx]} onHide={(e) => this.handleModal(e, idx)}>
                                            <h3 className="center marg-top">{apuesta.match_hometeam_name} - {apuesta.match_awayteam_name} </h3>
                                            <Modal.Body>
                                                <h4 className="center">Bet</h4>
                                                <form>
                                                    <div className="cont-bets marg-top-bot">
                                                        <div className="bets pointer">1</div><div className="bets pointer">X</div><div className="bets pointer">2</div>
                                                    </div>
                                                    <div className="d-flex flex-column marg-top">
                                                        <Button variant="dark">BET!</Button>
                                                    </div>
                                                </form>
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
