import React from 'react'


const BetCard = ({ local, visitante, cantidad, uno, dos, equis, unoxdos }) => {

    return (

        <tr className="timeM">
            <td><p>{local} - {visitante}</p></td>
            <td><p>{unoxdos}</p></td>
            <td><p>{cantidad}</p></td>
            <td><p>{uno} - {equis} - {dos}</p></td>
        </tr>

    )
}

export default BetCard
