import React from 'react'
import t from 'prop-types'
import ReactSelect from 'react-select'

const Select = ({ options, handleChange, defaultValue, isSearchable }) => (
  <ReactSelect
    options={options}
    onChange={handleChange}
    defaultValue={defaultValue}
    isSearchable={isSearchable}
  />
)

Select.propTypes = {
  options: t.array.isRequired,
  handleChange: t.func.isRequired,
  isSearchable: t.bool
}

Select.defaultProps = {
  isSearchable: true
}

export default Select
