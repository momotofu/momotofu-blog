import React from 'react'
require('./index.styl')

var ContactPage = React.createClass({
  messageStatus: {
    sending: 'Routing message...',
    success: 'Your message arrived in Momotofu\'s inbox.',
    error: 'Something went wrong, refresh the page and try again.'
  },
  componentWillMount() {
    const script = document.createElement('script')

    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'
    script.async = true

    document.body.appendChild(script)
  },
  sendForm: function(event) {
    event.preventDefault()

    var that = this
    var messageContainer = document.getElementById('ContactPage-form-message')
    var sendMessage = document.createTextNode(this.messageStatus.sending)
    document.getElementById('ContactPage-Form').style.display = 'none'

    messageContainer.style.display = 'flex'
    messageContainer.appendChild(sendMessage)

    $.ajax('/sendForm', {
      method: 'POST',
      data: {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val(),
      },
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
  },
  render: function() {
    return (
      <div className='ContactPage-container'>
        <div className='ContactPage-form-message' id='ContactPage-form-message'>
          {this.props.formMessage}
        </div>
        <form className='ContactPage-form' id='ContactPage-Form' onSubmit={ this.sendForm }>

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
})

export default ContactPage