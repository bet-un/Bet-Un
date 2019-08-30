import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
// import {Pie} from 'react-chartjs-2'
// import ApuestaCard from './Apuesta-card'
import '../App.css';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            apuesta: props.apuesta
        }
    }

    static defaultProps = {
        displayTitle: true,
        //displayLegend: true,
        //legendPosition: 'right',
        location: ''
    }

    render() {
        return (
            <div className="chart chart2">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Historico de apuestas' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                {/* <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Largest Cities In ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                /> */}

                {/* <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Ganancias y Perdidas de ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                /> */}
            </div>
        )
    }
}

export default Chart;