import React, { Component } from 'react'
import Services from '../services/league.services'

import SearchBar from './SearchBar'
import ClubCard from './Club-card'
import TickerMove from './Ticker-move'


import { Modal, Button } from 'react-bootstrap'


class ClubList extends Component {

    constructor() {
        super()
        this.state = {
            clubs: [],
            copy: [],
            showModal: [],
            liga: ""
        }
        this.services = new Services()
    }

    handleChangeInput = e => {
        e.preventDefault()
        this.services.getClubs(e.target.value)
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
                <div className="carousel marg-bot">
                    <TickerMove />
                </div>

                <div className="container tables">
                    <div className="row justify-content-center">
                        <h2 className="clubs-title">Clubs</h2>
                    </div>
                    <SearchBar findProducts={this.findProducts} />
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group linea">
                            <label htmlFor="ligas"></label>
                            <select name="liga" className="form-control" id="ligas" value={this.state.liga} onChange={this.handleChangeInput}>
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
                    <div className="row">
                        {this.state.copy && this.state.clubs.map((club, idx) => <div key={idx} className="col-md-3">
                            <div key={idx} onClick={(e) => this.handleModalModal(e, idx)} className="marg club-box pointer">
                                <div className='club-hov'>
                                    <img className="img-marg" src={club.team_badge} alt={club.team_name}></img>
                                    <p className="club-names">{club.team_name}</p>
                                </div>


                                <Modal size="lg" show={this.state.showModal[idx]} onHide={(e) => this.handleModalModal(e, idx)}>
                                    <Modal.Header closeButton>

                                    </Modal.Header>
                                    <Modal.Body><ClubCard key={idx} {...club}></ClubCard></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={e => this.handleModalModal(e, idx)}>
                                            Close
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
export default ClubList


