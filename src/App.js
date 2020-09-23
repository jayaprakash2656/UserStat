import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Metrics from './Containers/Metrics/Metrics';
import MainApp from './Containers/Main/Main';
import './App.css';

class App extends Component {

  render() {

  return (

    <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <a href="/" className="btn">
              InfinitiCube
            </a>
            <div className="metric-wrapper">
              <a href="/metrics" className="btn btn-nav">Metrics</a>
            </div>
          </header>
          <div className="container">
              <Switch>
                <Route path={`/metrics`} component={() => <Metrics />} />
                <Route path={`/`} component={() => <MainApp />} />
              </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}
}

export default App;
