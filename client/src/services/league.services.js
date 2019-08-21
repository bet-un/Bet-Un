import axios from 'axios'

export default class Services {
    constructor() {

        this.service = axios.create({
            baseURL: 'https://api.football-data.org/v2/'
        })
    }
    getLeagues = () => this.service.get('https://apiv2.apifootball.com/?action=get_standings&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
    getClubs = () => this.service.get('https://apiv2.apifootball.com/?action=get_teams&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
    getJornada = () => this.service.get('https://apiv2.apifootball.com/?action=get_events&from=2019-08-16&to=2019-08-18&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
    getPredictions = () => this.service.get('https://apiv2.apifootball.com/?action=get_predictions&from=2019-08-23&to=2019-08-26&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
}
//Llamar desde el back
// let desde = "2019-08-16"
// let hasta = "2019-08-18"
// let desde = document.getElementById("start").value;
// let hasta = document.getElementById("end").value;
// let liga = "468"
// let selectLiga = document.getElementById("ligas").value;


//https://apiv2.apifootball.com/?action=get_predictions&from=2019-08-23&to=2019-08-26&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1
