import React from 'react'
require('./index.styl')

var ContactPage = React.createClass({
  render: function() {
    return (
      <div className='ContactPage-container'>
        <form className='ContactPage-form'>

          <div className='ContactPage-form-input-items'>
            <div className='ContactPage-form-input-items-content'>
              <div className='ContactPage-form-input-items-content-label'>
                Name
              </div>
              <input
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
                className='ContactPage-form-input-items-content-input'
                type='text'
                placeholder='Email'
                />
            </div>
          </div>

            <div className='ContactPage-form-input-items'>
              <div className='ContactPage-form-input-items-content'>
                <textarea
                  className='ContactPage-form-input-items-content-input ContactPage-form-input-items-content-textarea'
                  type='text'
                  placeholder='Write something...'
                  />
              </div>
            </div>

            <button
              className='ContactPage-form-button'
              type='submit'>
              Send
            </button>

        </form>
      </div>
    )
  }
})

export default ContactPage