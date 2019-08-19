import React from 'react'


const LeagueCard = ({ name, country, flag }) => {

    return (
        <div className="col-md-6">
            <img src={flag} alt={name} />
            <h4>{name}</h4>
            <hr></hr>
            <p>{country}</p>
        </div>
    )
}

export default LeagueCard