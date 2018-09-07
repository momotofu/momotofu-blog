import React from 'react'
import './index.css'
const $ = window.$

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

    this.messageStatus = {
      sending: 'Routing message...',
      success: 'Your message arrived in Momotofu\'s inbox.',
      error: 'Something went wrong, refresh the page and try again.'
    }
  }

  // lifecycle methods
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  // general methods
  sendForm(event) {
    event.preventDefault()

    const that = this
    const messageContainer = document.getElementById('ContactPage-form-message')
    const sendMessage = document.createTextNode(this.messageStatus.sending)
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/recieveForm' : 'https://momotofu-api-prod.herokuapp.com/recievForm'
    document.getElementById('ContactPage-Form').style.display = 'none'

    messageContainer.style.display = 'flex'
    messageContainer.appendChild(sendMessage)

    $.ajax(url, {
      method: 'POST',
      crossDomain: true,
      dataType: 'json',
      data: JSON.stringify({
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val(),
      }),
      success: function(data) {
        messageContainer.removeChild(messageContainer.lastChild)
        messageContainer.appendChild(document.createTextNode(that.messageStatus.success))
        console.log('sent data: ', data)
      },
      error: function(xhr, status, err) {
        messageContainer.removeChild(messageContainer.lastChild)
        messageContainer.appendChild(document.createTextNode(that.messageStatus.error))
        console.error(status, err.toString());
      }
    })
  }

  render() {
    return (
      <div>
        <div className='ContactPage-form-message' id='ContactPage-form-message'>
          {this.props.formMessage}
        </div>

        <form
          className={ `ContactPage-form${ this.props.classes ? ' ' + this.props.classes : ''}` }
          id='ContactPage-Form'
          onSubmit={ this.sendForm.bind(this) }>
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
