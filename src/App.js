import React, { Component } from 'react'
import './App.scss'
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <NavBar />
        </div>
        <div className="container">
          <p>hello</p>
        </div>
      </div>
    )
  }
}

export default App
