import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import WorkoutDetailPage from './components/WorkoutDetail';
import WorkoutListPage from './components/WorkoutListPage';


function App() {
  return (
    <div className="app">
      <Router>
          <Header/>
          <Switch>
            <Route path="/workouts/:id">
              <WorkoutDetailPage />
            </Route>
            <Route exact path="/">
              <WorkoutListPage />
            </Route>
          </Switch>
      </Router>
    </div>

  );
}

export default App;
