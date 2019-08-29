import React from 'react'
//import { Link } from 'react-router-dom'
import '../App.css';

const ClubCard = ({ team_name, team_badge, players }) => {
    //(players && players.forEach(name => console.log(name.player_name)))
    return (
        <div className="col-md-12">
            <div className="cardClub">
                <h4>{team_name}</h4>
                <img className="marg-bot" src={team_badge} alt="Escudo" width="15%"></img>
                <table className="table white-let">
                    <tbody>
                        <tr>
                            <th>Player</th>
                            <th>Number</th>
                            <th>Age</th>
                            <th>Matches Playeds</th>
                            <th>Goals</th>
                            <th>Y.C</th>
                            <th>R.C</th>

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