import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_ROUTE}`,
            withCredentials: true
        })
    }

    signup = (username, password) => this.service.post('signup', { username, password })
    login = (username, password) => this.service.post('login', { username, password })
    logout = () => this.service.post('logout')
    loggedin = () => this.service.get('loggedin')
    updateUser = (updateInfo) => {
        const { dif, bet } = updateInfo
        //console.log(updateInfo, "vengo de auth service")
        //console.log("info que llega al update service", { dif: updateInfo.dif, idBet: updateInfo.bet })
        return this.service.post('update', { dif, bet })
    }
    myBets = () => this.service.get('misApuestas')

    updateUseCard = (updateInfoCard) => {

        return this.service.post('card', { card: true })
    }

}