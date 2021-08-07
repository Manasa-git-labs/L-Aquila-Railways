import './App.css';

import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { history } from './utils/history';
import Dashboard from './components/Dashboard';
import TrainImage from './assets/train-bg.jpg';

// import PageNotFound from './components/PageNotFound';
// import TrainsList from './components/TrainsList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <img src={TrainImage} className="background-image" />
          <Dashboard></Dashboard>
          
        </Router>
      </div>
    )
  }
}

