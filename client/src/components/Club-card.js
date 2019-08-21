import React from 'react'
//import { Link } from 'react-router-dom'
import '../App.css';

const ClubCard = ({ team_name, team_badge, players }) => {
    //(players && players.forEach(name => console.log(name.player_name)))
    return (
        <div className="col-md-12">
            <div className="cardClub">
                <h4>{team_name}</h4>
                <img src={team_badge} alt="Escudo" width="15%"></img>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Jugador</th>
                            <th>Dorsal</th>
                            <th>Años</th>
                            <th>P.J.</th>
                            <th>Goles</th>
                            <th>T.A.</th>
                            <th>T.R.</th>

                        </tr>

                        {(players && players.map((name, idx) => <tr key={idx}>
                            <td>{name.player_name}</td>
                            <td>{name.player_number}</td>
                            <td>{name.player_age}</td>
                            <td>{name.player_match_played}</td>
                            <td>{name.player_goals}</td>
                            <td>{name.player_yellow_cards}</td>
                            <td>{name.player_red_cards}</td>
                        </tr>))}

                    </tbody>
                </table>
            </div>
        </div>


    )

}

export default ClubCard