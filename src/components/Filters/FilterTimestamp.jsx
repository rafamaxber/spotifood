import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import styled from 'styled-components'

const StyledDateTimePicker = styled(DateTimePicker)`
  & .react-datetime-picker__wrapper {
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`

export const FilterTimestamp = ({ action, value }) => (
  <StyledDateTimePicker onChange={action} value={value} />
)
