import React from "react";
const tickerBox = ({ match_time, match_date, match_awayteam_name, match_hometeam_name }) => {
    return (

        <div style={{
            whiteSpace: "nowrap"
        }}> |  {match_hometeam_name} - {match_awayteam_name} on {match_date} at {match_time}  |</div>

    );
};
export default tickerBox;