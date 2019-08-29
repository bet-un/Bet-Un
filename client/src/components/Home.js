import React, { Component } from 'react'
import TickerMove from './Ticker-move'
import LeagueBox from './League-box'
import Services from '../services/league.services'
import AuthServices from '../services/auth.services'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leagues: [],
            liga: ""
        }
        this.authServices = new AuthServices()
        this.services = new Services()
    }

    componentDidMount = () => {
        this.services.getSantanderLeague()
            .then(response => this.setState({ leagues: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        if (this.props.userInSession) {

            return (
                <>
                    <div className="carousel marg-bot">
                        <TickerMove />
                    </div>

                    <div className="leagues-box">
                        <h5>Liga Santander</h5>
                        <div>
                            {this.state.leagues && this.state.leagues.map((league, idx) => <LeagueBox key={idx} idx={idx} {...league} />).splice(0, (this.state.leagues.length - 15))}
                        </div>
                    </div>

                </>
            )
        } else {
            return (
                <>
                    <div className="carousel marg-bot">
                        <TickerMove />
                    </div>
                </>)
        }
    }
}
export default Home