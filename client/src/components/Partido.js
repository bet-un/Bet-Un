import React from 'react'
//import { Link } from 'react-router-dom'



const Partido = ({ statistics, match_time, match_status, match_awayteam_name, match_hometeam_score, match_awayteam_score, match_hometeam_name }) => {

    return (

        <tr>
            <td>{match_hometeam_name}</td>
            <td>{match_hometeam_score}</td>
            <td><p>-</p></td>
            <td>{match_awayteam_score}</td>
            <td>{match_awayteam_name}</td>
            <td>{match_time}</td>
            <td>{match_status}</td>
            <td>{statistics[0].home}-{statistics[0].away}</td>

        </tr>


    )

}

export default Partido
