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

                                        <Modal size="lg" show={this.state.showModal[idx]} onHide={(e) => this.handleModal(e, idx)}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Detalles del club DE CORLEONE</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p key={idx}>{apuesta.match_hometeam_name} - {apuesta.match_awayteam_name}</p>
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
