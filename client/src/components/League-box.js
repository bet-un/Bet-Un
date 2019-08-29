import React from 'react'




const LeagueBox = (props) => {
    let num = props.idx + 1
    return (
        <p className="league-list">{num}. {props.team_name} | <small>{props.overall_league_PTS}</small></p>
    )
}

export default LeagueBox