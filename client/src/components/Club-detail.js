import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Services from '../services/league.services'

class ClubDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { detail: [] }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOneClub(this.props.match.params)
            .then(response => this.setState({ detail: response.data }))
            .catch(err => console.log('err', err))
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <article >
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1>Detalles</h1>

                            {/* <h1>Detalles de {this.state.coaster.title}</h1>
                            <p><strong>Descripción:</strong> {this.state.coaster.description}</p>
                            <hr></hr>
                            <p><small>Longitud:</small> {this.state.coaster.length} | Inversiones: {this.state.coaster.inversions}</p>
                            <Link className="btn btn-big btn-dark" to="/coasters">Volver</Link> */}
                        </div>
                        <div className="col-md-4">
                            <img src={this.state.detail.team_badge} alt="bandera"></img>
                        </div>
                    </div>
                </article>
            </div>
        )
    }

}

export default ClubDetail