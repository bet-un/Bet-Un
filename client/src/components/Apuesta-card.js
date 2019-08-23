import React from 'react'
//import { Link } from 'react-router-dom'
import '../App.css';


const ApuestaCard = ({ match_awayteam_score, match_hometeam_score, match_status, match_date, prob_D, prob_AW, prob_HW, match_time, match_awayteam_name, match_hometeam_name, onClick }) => {
    //(players && players.forEach(name => console.log(name.player_name)))
    return (


        <tr className="timeM" onClick={onClick}>

            <td><p>{match_hometeam_name}</p></td>
            <td><p>{match_hometeam_score}</p></td>
            <td><p>-</p></td>
            <td><p>{match_awayteam_score}</p></td>
            <td><p>{match_awayteam_name}</p></td>
            <td><p>{match_time}</p></td>
            <td><p>{match_date}</p></td>
            <td><p>{match_status}</p></td>
            <td><p>{prob_HW}</p></td>
            <td><p>{prob_AW}</p></td>
            <td><p>{prob_D}</p></td>

        </tr>




    )

}

export default ApuestaCard