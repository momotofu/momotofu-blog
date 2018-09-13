import React from 'react'
import { generateRandomIDHash } from '../../utils'
import './index.css'

const Checkbox = ({ label, isChecked, onChange }) => {
  const id = generateRandomIDHash() + label
  console.log('isChecked: ', isChecked)
  return (
    <div>
      <input
        type="checkbox"
        id={ id }
        checked={ isChecked }
        value={ label }
        onChange={ onChange } />
      <label htmlFor={ id }>{ label }</label>
    </div>
  )
}

export default Checkbox

