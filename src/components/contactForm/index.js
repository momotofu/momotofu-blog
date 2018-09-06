import React from 'react'
import './index.css'

class ContactForm extends React.Component {
  /**
   * contact form
   *
   * state:
   *
   * component props are:
   */

  constructor(props) {
    super(props)
  }

  // lifecycle methods
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  // general methods

  render() {
    return (
      <form
        className='ContactPage-form'
        id='ContactPage-Form'
        onSubmit={ this.sendForm }>
        <div className='ContactPage-form-input-items'>
          <div className='ContactPage-form-input-items-content'>
            <div className='ContactPage-form-input-items-content-label'>
              Name
            </div>
            <input
              id='name'
              className='ContactPage-form-input-items-content-input'
              type='text'
              placeholder='Name'
              />
          </div>
          <div className='ContactPage-form-input-items-content'>
            <div className='ContactPage-form-input-items-content-label'>
              Email
            </div>
            <input
              id='email'
              className='ContactPage-form-input-items-content-input'
              type='text'
              placeholder='Email'
              />
          </div>
        </div>
        <div className='ContactPage-form-input-items'>
          <div className='ContactPage-form-input-items-content'>
            <textarea
              id='message'
              className='ContactPage-form-input-items-content-input ContactPage-form-input-items-content-textarea'
              type='text'
              placeholder='Write something...'
              />
          </div>
        </div>
        <input
          className='ContactPage-form-button'
          type='submit'
          value='Send'>
        </input>
      </form>
    )
  }
}

export default ContactForm
