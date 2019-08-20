import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'


import ClubDetail from './components/Club-detail'
import LeagueList from './components/League-list'
import ClubList from './components/Club-list'
import NavBar from './components/Nav'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route path="/LigaSantander" exact component={LeagueList} />
          <Route path="/Clubs" exact component={ClubList} />
          <Route path="/details/:players" exact component={ClubDetail} />
        </Switch>
      </div>
    </>
  );
}

export default App;
