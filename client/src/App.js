import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'

import Apuesta from './components/Apuesta-list'
import Jornada from './components/Jornada'
import LeagueList from './components/League-list'
import ClubList from './components/Club-list'
import NavBar from './components/Nav'
import Perfil from './components/Perfil'
import Historico from './components/Historico-apuestas'
import Chart from './components/chartHistorico'
// import Video from './components/video'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: null,
      showMenu: false
    }
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    //console.log(this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  handleMenu = () => {
    const menuState = !this.state.showMenu
    this.setState({ showMenu: menuState })
  }

  render() {

    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div className="back" >
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          {/* <Video /> */}

          <div className="carousel">
            sadlfkjsaflsjafljf alsñfjslfkjs alñfjdsalfjsafjl
        </div>
          <Switch>
            <Route path="/LigaSantander" exact component={LeagueList} />
            <Route path="/Clubs" exact component={ClubList} />
            <Route path="/Jornada" exact component={Jornada} />
            <Route path="/Apuesta" exact component={Apuesta} />
            <Route path="/Perfil" exact component={Perfil} />
            <Route path="/Historico" exact component={Historico} />
            <Route path="/Chart" exact component={Chart} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          {/* <Video /> */}
          <div className="carousel">
            sadlfkjsaflsjafljf alsñfjslfkjs alñfjdsalfjsafjl
        </div>
          <div className="offer">
            Register now and get 10€. Limited to the first 100 users!
          </div>
          <Switch>
            <Route path="/LigaSantander" exact component={LeagueList} />
            <Route path="/Clubs" exact component={ClubList} />
            <Route path="/Jornada" exact component={Jornada} />
          </Switch>
        </div>
      );
    }
  }
}

export default App