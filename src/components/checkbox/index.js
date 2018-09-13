import React from 'react'
import { generateRandomIDHash } from '../../utils'
import './index.css'

const Checkbox = ({ label, isChecked, toggleFilter }) => {
  const id = generateRandomIDHash() + label
  const handleChange = (event) => {
    toggleFilter()
    event.stopPropagation()
  }

  return (
    <div>
      <input
        type="checkbox"
        id={ id }
        checked={ isChecked }
        value={ label }
        onChange={ handleChange } />
      <label htmlFor={ id }>{ label }</label>
    </div>
  )
}

export default Checkbox

