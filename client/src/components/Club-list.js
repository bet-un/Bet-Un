import React, { Component } from 'react'
import Services from '../services/league.services'

import SearchBar from './SearchBar'
import ClubCard from './Club-card'
import '../App.css';

import { Modal, Button } from 'react-bootstrap'


class ClubList extends Component {

    constructor() {
        super()
        this.state = {
            clubs: [],
            copy: [],
            showModal: [],
            liga:""
        }
        this.services = new Services()
    }

    // componentDidMount() {
    //     this.services.getClubs()
    //         .then(response => this.setState({ clubs: response.data, copy: response.data, showModal: Array(response.data.length - 1).fill(false) }))
    //         .catch(err => console.log(err))
    // }
    handleChangeInput = e => { this.setState({ [e.target.name]: e.target.value }) }

    handleFormSubmit = e => {
        e.preventDefault()
        this.services.getClubs(this.state.liga)
            .then(response => this.setState({ clubs: response.data, copy: response.data, showModal: Array(response.data.length - 1).fill(false) }))
            .catch(err => console.log(err))
    }

    findProducts = search => {
        let copyproducts = [...this.state.copy]
        copyproducts = copyproducts.filter(elm => {
            return elm.team_name.toLowerCase().includes(search.toLowerCase())
        })
        this.setState({
            clubs: copyproducts
        })
    }

    handleModalModal = (e, index) => {

        const modalModal = !this.state.showModal[index]
        const copy = [...this.state.showModal]
        copy[index] = modalModal
        this.setState({ ...this.state, showModal: copy })

    }

    render() {

        return (
            <>
                <div className="container opacity">
                    <div className="row justify-content-center">
                        <h2>Clubs</h2>
                    </div>
                    <SearchBar findProducts={this.findProducts} />
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group linea">
                            <label htmlFor="ligas"></label>
                            <select name="liga" className="form-control" id="ligas" value={this.state.liga} onChange={this.handleChangeInput}>
                                <option></option>
                                <option value="468">Liga Santander</option>
                                <option value="148">Premier League</option>
                                <option value="176">Ligue 1</option>
                                <option value="195">Bundesliga</option>
                                <option value="262">Serie A</option>
                            </select>
                            <button type="submit" className="btn btn-dark btn-sm">Seleccionar</button>
                        </div>
                    </form>
                    <div className="row">
                        {this.state.copy && this.state.clubs.map((club, idx) => <div key={idx} className="col-md-3">
                            <div key={idx} onClick={(e) => this.handleModalModal(e, idx)} className="marg border pointer"><p>{club.team_name}</p>
                                <img className="img-marg" src={club.team_badge} alt={club.team_name}></img>


                                <Modal size="lg" show={this.state.showModal[idx]} onHide={(e) => this.handleModalModal(e, idx)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Detalles del club {club.team_name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><ClubCard key={idx} {...club}></ClubCard></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={e => this.handleModalModal(e, idx)}>
                                            Cerrar
                               </Button>

                                    </Modal.Footer>
                                </Modal></div></div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

{/* <div key={idx} className="col-md-12"><div className="marg border"><p>{club.team_name}</p><img className="img-marg" src={club.team_badge} alt={club.team_name}></img></div></div> */ }
export default ClubList


