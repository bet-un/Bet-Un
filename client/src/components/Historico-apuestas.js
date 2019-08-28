import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import Services from '../services/league.services'
import Chart from './chartHistorico'

class Historico extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}

        }
    }
    componentWillMount() {
        this.getChartData();
    }
    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Levante - Villareal', 'Real Madrid - Valladoril', 'Barcelona - Betis', 'Tottenham - Newcastle', 'Alaves - Espanyol', 'Celta de Vigo - Valencia'],
                datasets: [
                    {
                        label: 'Bets',
                        data: [
                            10,
                            25,
                            50,
                            42,
                            13,
                            15
                        ],
                        borderColor: [
                            'rgba(31,31,31, .52)',
                            'rgba(31,31,31, .52)',
                            'rgba(31,31,31, .52)',
                            'rgba(31,31,31, .52)',
                            'rgba(31,31,31, .52)',
                            'rgba(31,31,31, .52)'

                        ],
                        backgroundColor: [
                            'rgba(45, 235, 17, .52)',
                            'rgba(45, 235, 17, .52)',
                            'rgba(45, 235, 17, .52)',
                            'rgba(45, 235, 17, .52)',
                            'rgba(45, 235, 17, .52)',
                            'rgba(45, 235, 17, .52)'

                        ]

                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Chart chartData={this.state.chartData} legendPosition="bottom" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Historico










