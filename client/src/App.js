import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import LeagueList from './components/League-list'
import NavBar from './components/Nav'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <h1>Pagina principal</h1>
        <Switch>
          <Route path="/leagues" exact component={LeagueList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
