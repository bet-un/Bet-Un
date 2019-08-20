import React, { Component } from 'react'
import Services from '../services/league.services'

//import LeagueCard from './League-card'



class LeagueList extends Component {

    constructor() {
        super()
        this.state = { leagues: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getLeagues()
            .then(response => this.setState({ leagues: response.data }))
            .catch(err => console.log(err))
    }
    render() {

        return (
            <>
                <div className="container">
                    <h1>Listado de ligas</h1>
                    <div className="row">
                        {this.state.leagues && console.log(true)}
                    </div>
                </div>
            </>
        )
    }
}


export default LeagueList








// class LeagueList extends Component {

//     constructor() {
//         super()
//         this.state = { leagues: [] }
//         this.services = new Services()
//     }

//     componentDidMount() {
//         this.services.getLeagues()
//             .then(response => this.setState({ leagues: response.data }))
//             .catch(err => console.log(err))
//     }
//     render() {
//         return (

//             <>
//             <h1>Soy el componente de leagues</h1>
//             {/* {this.state.leagues.map(leagues => <LeagueCard />)} */}
//             </>

//         )
//     }

// }


//  export default LeagueList

