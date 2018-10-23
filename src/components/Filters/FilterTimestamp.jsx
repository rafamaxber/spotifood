import React from 'react'
import t from 'prop-types'
import DateTimePicker from 'react-datetime-picker'
import styled from 'styled-components'

const StyledDateTimePicker = styled(DateTimePicker)`
  & .react-datetime-picker__wrapper {
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`

export const FilterTimestamp = ({ action, value }) => {
  const date = new Date(value)
  return <StyledDateTimePicker onChange={action} value={date} />
}

FilterTimestamp.propTypes = {
  /** Method to select a timestamp */
  action: t.func.isRequired,
  /** Timestamp value */
  value: t.string.isRequired
}
