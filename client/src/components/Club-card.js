import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


const ClubCard = ({ team_name, team_badge, players }) => {
    (players && players.forEach(name => console.log(name.player_name)))
    return (
        <div className="col-3 cardClub">
            <Link to={`/details/${players}`}>
                <h4>{team_name}</h4>
                <img src={team_badge} alt="Escudo" width="25%"></img>
                <p></p>
            </Link>

        </div>


    )

}

export default ClubCard