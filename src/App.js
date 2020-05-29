import React, { Component } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import AboutPage from './pages/about'
import WorksPage from './pages/works'
import AlgorithmsPage from './pages/algorithms'
import ContactPage from './pages/contact'
import NavBar from './components/navbar'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar navLinks={ ['About', 'Works', 'Algorithms', 'Contact'] }/>
        <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Route exact path="/" render={() => (
              <Redirect to="/about"/>
          )}/>
          <Route exact path="/about" component={ AboutPage } />
          <Route path="/works" component={ WorksPage } />
          <Route path="/algorithms" component={ AlgorithmsPage } />
          <Route path="/contact" component={ ContactPage }/>
        </div>
      </div>
    )
  }
}

export default App
