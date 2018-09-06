import React, { Component } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap-grid.min.css'
//import 'bootstrap/dist/css/bootstrap-reboot.min.css'

import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import NavBar from './components/navbar'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Route exact path="/" render={() => (
              <Redirect to="/about"/>
          )}/>
          <Route exact path="/about" component={ AboutPage } />
          {/*
          <Route path="/blog" />
          <Route path="/contributions" />
          */}
          <Route path="/contact" component={ ContactPage }/>
        </div>
      </div>
    )
  }
}

export default App
