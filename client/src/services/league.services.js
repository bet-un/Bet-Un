import axios from 'axios'

export default class Services {
    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_ROUTE}`,
            //withCredentials: true
        })
    }
    getLeagues = selectLiga => this.service.get(`https://apiv2.apifootball.com/?action=get_standings&league_id=${selectLiga}&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1`)
    getClubs = selectLiga => this.service.get(`https://apiv2.apifootball.com/?action=get_teams&league_id=${selectLiga}&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1`)
    getJornada = selectLiga => this.service.get(`https://apiv2.apifootball.com/?action=get_events&from=2019-08-23&to=2019-08-26&league_id=${selectLiga}&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1`)
    getPredictions = selectLiga => this.service.get(`https://apiv2.apifootball.com/?action=get_predictions&from=2019-08-30&to=2019-09-01&league_id=${selectLiga}&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1`)
    getPredictionsCarousel = () => this.service.get(`https://apiv2.apifootball.com/?action=get_predictions&from=2019-08-30&to=2019-09-01&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1`)
    //getCopas = () => this.service.get('https://apiv2.apifootball.com/?action=get_teams&league_id=8760&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')
    //getBet = () => this.service.get('https://apiv2.apifootball.com/?action=get_odds&from=2019-08-23&to=2019-08-26&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1')

    getBets = () => this.service.get('getAllBets')
    postBet = theNewBet => this.service.post('postBet', theNewBet)

}
//Llamar desde el back
