import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'


import ClubDetail from './components/Club-detail'
import AuthServices from './services/auth.services'

import LeagueList from './components/League-list'
import ClubList from './components/Club-list'
import NavBar from './components/Nav'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })

  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  render() {

    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          <Switch>
            <Route path="/LigaSantander" exact component={LeagueList} />
            <Route path="/Clubs" exact component={ClubList} />
            <Route path="/details/:players" exact component={ClubDetail} />
          </Switch>
        </>
      );
    } else {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            {/* <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
            <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} /> */}
          </Switch>
        </>
      );
    }
  }
}

export default App