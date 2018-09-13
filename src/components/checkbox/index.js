import React from 'react'
import { generateRandomIDHash } from '../../utils'
import './index.css'

const Checkbox = ({ label, isChecked, onClick }) => {
  const id = generateRandomIDHash() + label
  return (
    <div>
      <input
        type="checkbox"
        id={ id }
        checked={ isChecked }
        value={ label }
        onClick={ onClick } />
      <label htmlFor={ id }>{ label }</label>
    </div>
  )
}

export default Checkbox

