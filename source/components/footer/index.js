import React from "react"
require('./index.styl')

class Footer extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return(
      <div className='Footer-container'>
        <a className='Footer-signifier' href='http://github.com/momotofu' target='_blank'>Github</a>
        <a className='Footer-signifier' href='https://www.linkedin.com/in/christophermreece' target='_blank'>Linkedin</a>
        <a className='Footer-signifier' href='https://dribbble.com/momotofu' target='_blank'>Dribbble</a>
      </div>
    )
  }
}

export default Footer