import React from 'react'


const BetCard = ({ local, visitante, cantidad, apuestas }) => {

    return (

        <tr className="timeM pointer">
            <td><p>{local} - {visitante}</p></td>
            <td><p>{cantidad}</p></td>
            <td><p>{apuestas}</p></td>
        </tr>

    )
}

export default BetCard
