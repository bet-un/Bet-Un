import React from 'react'
//import { Link } from 'react-router-dom'
import '../App.css';


const ApuestaCard = ({ prob_D, prob_AW, prob_HW, match_time, match_awayteam_name, match_hometeam_name }) => {
    //(players && players.forEach(name => console.log(name.player_name)))
    return (


        <tr>

            <td><p className="local">{match_hometeam_name}</p></td>
            <td><p>-</p></td>
            <td><p className="visitante">{match_awayteam_name}</p></td>
            <td><p className="timeM">{match_time}</p></td>
            <td><p className="apu victoriaL">{prob_HW}</p></td>
            <td><p className="apu victoriaV">{prob_AW}</p></td>
            <td><p className="apu empate">{prob_D}</p></td>

        </tr>




    )

}

export default ApuestaCard