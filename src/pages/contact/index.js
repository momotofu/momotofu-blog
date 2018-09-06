import React from 'react'
import ContactForm from '../../components/contactForm'
import './index.css'

class ContactPage extends React.Component {
  /**
   * Contact page
   *
   * state:
   *
   * component props are:
   */
  constructor(props) {
    super(props)

    this.anime = window.anime
  }

  // lifecycle methods
  componentWillUnmount() {
  }

  componentDidMount() {
  }

  // general methods
  render() {
    return (
      <div className="ContactPage">
        <ContactForm />
      </div>
    )
  }
}

export default ContactPage
