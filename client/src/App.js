import React, { Component } from 'react';
// import './bg.css'
// import './App.css';
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'

import Apuesta from './components/Apuesta-list'
import Jornada from './components/Jornada'
import LeagueList from './components/League-list'
import ClubList from './components/Club-list'
import NavBar from './components/Nav'
import Perfil from './components/Perfil'
import Historico from './components/Historico-apuestas'
import Home from './components/Home'
// import Chart from './components/chartHistorico'
// import TickerMove from './components/Ticker-move'
import Secret from './components/Secret'
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
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          {/* <Video /> */}

          {/* <div className="carousel marg-bot">
              <TickerMove />
          </div> */}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/LigaSantander" exact component={LeagueList} />
            <Route path="/Clubs" exact component={ClubList} />
            <Route path="/Jornada" exact component={Jornada} />
            <Route path="/Apuesta" exact render={() => <Apuesta setUser={this.setTheUser} usuario={this.state.loggedInUser} />} />
            <Route path="/Perfil" exact component={Perfil} />
            <Route path="/Historico" exact component={Historico} />
            <Route path="/Secret" exact component={Secret} />
          </Switch>
        </>
      );
    } else {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          {/* <Video /> */}

          <div className="offer">
            Register now and get 10€. Limited to the first 100 users!
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/LigaSantander" exact component={LeagueList} />
            <Route path="/Clubs" exact component={ClubList} />
            <Route path="/Jornada" exact component={Jornada} />
          </Switch>
        </>
      );
    }
  }
}

export default App