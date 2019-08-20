import axios from 'axios'

export default class Services {
    constructor() {

        this.service = axios.create({
            baseURL: 'https://api.football-data.org/v2/'
        })
    }
    getLeagues = () => this.service.get('https://apiv2.apifootball.com/?action=get_standings&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
    getClubs = () => this.service.get('https://apiv2.apifootball.com/?action=get_teams&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
    getOneClub = players => this.service.get(`getOneClub/${players}`)

}
//Llamar desde el back


