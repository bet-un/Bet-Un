import React from "react";
const tickerBox = ({ match_time, match_date, match_awayteam_name, match_hometeam_name }) => {
    return (
        <>
            <small>&emsp;| {match_hometeam_name} - {match_awayteam_name} on {match_date} at {match_time} |&emsp;</small>
        </>
    );
};
export default tickerBox;