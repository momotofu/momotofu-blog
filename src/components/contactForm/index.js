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

  // lifecycle methods
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  // general methods

  render() {
    return (
      <div>
        <div className='ContactPage-form-message' id='ContactPage-form-message'>
          {this.props.formMessage}
        </div>

        <form
          className={ `ContactPage-form${ this.props.classes ? ' ' + this.props.classes : ''}` }
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
      </div>
    )
  }
}

export default ContactForm
