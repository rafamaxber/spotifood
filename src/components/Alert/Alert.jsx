import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'

const statuColor = {
  error: '#fb7575',
  success: '#95fb75',
  warning: '#f8fb75',
  default: '#dbd7a7'
}

const Bar = styled.div`
  background-color: ${props => statuColor[props.status]};
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
`

const Alert = ({ message, status }) => <Bar status={status}>{message}</Bar>

Alert.propTypes = {
  message: t.string.isRequired,
  status: t.oneOf(['error', 'success', 'warning', 'default'])
}

Alert.defaultProps = {
  status: 'default'
}

export default Alert
