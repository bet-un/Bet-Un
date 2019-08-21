import React, { Component } from 'react'
import Services from '../services/league.services'
//import { Link } from 'react-router-dom'

import ClubCard from './Club-card'


class ClubList extends Component {

    constructor() {
        super()
        this.state = { clubs: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getClubs()
            .then(response => this.setState({ clubs: response.data }))
            .catch(err => console.log(err))
    }
    render() {

        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2>Clubs</h2>
                    </div>
                    <div className="row">
                        {this.state.clubs && this.state.clubs.map((club, idx) => <ClubCard key={idx} {...club} />)}
                    </div>
                </div>
            </>
        )
    }
}


export default ClubList


