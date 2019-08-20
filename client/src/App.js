import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

import LeagueList from './components/League-list'
import NavBar from './components/Nav'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log(this.state.loggedInUser)
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
            <Route path="/leagues" exact component={LeagueList} />
          </Switch>
        </>
      );
    } else {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            <Route path="/leagues" exact component={LeagueList} />
            <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
            <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
          </Switch>
        </>
      );
    }
  }
}

export default App