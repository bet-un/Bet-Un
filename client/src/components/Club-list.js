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
            showModal: []
        }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getClubs()
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


