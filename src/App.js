import React, { Component } from 'react'
import './App.scss'
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
        </div>
      </div>
    )
  }
}

export default App
