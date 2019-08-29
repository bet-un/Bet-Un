import React, { Component } from 'react'
import Ticker from 'react-ticker'
import Services from '../services/league.services'
import TickerBox from './Ticker-box'
import { Spinner } from 'react-bootstrap'

class TickerMove extends Component {
    constructor() {
        super()
        this.state = { tickers: [] }
        this.services = new Services()
    }
    componentDidMount() {


        this.services.getPredictionsCarousel("")
            .then(response => this.setState({ tickers: response.data }))
            .catch(err => console.log({ err }))
        //{ tickers: response.data }
        //console.log(response.data)
    }
    render() {
        return this.state.tickers.length !== 0 ? (
            <Ticker speed={5} mode={"smooth"} >
                {() => (
                    <div className="tick-pos">
                        {this.state.tickers.map((tickers, idx) => <TickerBox key={idx} {...tickers} />)}
                    </div>
                )}
            </Ticker >
        ) : (
                <Spinner animation="border" variant="light" />
            )
    }
}
export default TickerMove