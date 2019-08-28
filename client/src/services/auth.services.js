import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${REACT_APP_ROUTE}`,
            withCredentials: true
        })
    }

    signup = (username, password) => this.service.post('signup', { username, password })
    login = (username, password) => this.service.post('login', { username, password })
    logout = () => this.service.post('logout')
    loggedin = () => this.service.get('loggedin')
    updateUser = () => this.service.post('update')

}