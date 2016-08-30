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
                Name
              </div>
              <input
                className='ContactPage-form-input-items-content-input'
                type='text'
                placeholder='Name'
                />
            </div>

          </div>
        </form>
      </div>
    )
  }
})

export default ContactPage