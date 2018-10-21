import React from 'react'
import ReactSelect from 'react-select'

const Select = props => (
  <ReactSelect
    {...props}
    onChange={props.handleChange}
    defaultValue={props.defaultValue}
    isSearchable={true}
  />
)

export default Select
