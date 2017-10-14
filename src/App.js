import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import JobFinder from './containers/JobFinder'
import JobResults from './containers/JobResults'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={JobFinder}/>
          <Route path='/jobFinder' component={JobFinder}/>
          <Route path='/jobResults' component={JobResults}/>
        </div>
      </Router>
    )
  }
}

export default App
