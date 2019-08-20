import React from 'react'
import { Link } from 'react-router-dom'



const LeagueCard = ({ overall_league_PTS, overall_league_GA, overall_league_GF, overall_league_position, team_name, overall_league_payed, overall_league_L, overall_league_W, overall_league_D }) => {

    return (

        <tr>
            <th>{overall_league_position}</th>
            <td><Link to={`/Clubs`}>{team_name}</Link></td>
            <td>{overall_league_payed}</td>
            <td>{overall_league_L}</td>
            <td>{overall_league_W}</td>
            <td>{overall_league_D}</td>
            <td>{overall_league_GF}</td>
            <td>{overall_league_GA}</td>
            <th>{overall_league_PTS}</th>
        </tr>


    )

}

export default LeagueCard

