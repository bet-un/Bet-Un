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
                labels: ['Apuesta1', 'Apuesta2', 'Apuesta3', 'Apuesta4', 'Apuesta5', 'Apuesta6'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            50,
                            43,
                            61,
                            45,
                            22,
                            13
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
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
                    <div className="col-6">
                        <Chart chartData={this.state.chartData} location="=>Usuario" legendPosition="bottom" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Historico










