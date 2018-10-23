import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import { Label } from '../Filters'

import { Select } from '../Form'

const Locale = styled.div``

export const FilterLocale = ({ action, selected, options }) => {
  return (
    <Locale>
      <Label>
        <Select
          handleChange={action}
          options={options}
          placeholder={'Filter by locale'}
        />
      </Label>
    </Locale>
  )
}

FilterLocale.propTypes = {
  /** Method to select country */
  action: t.func.isRequired,
  /** Field name */
  options: t.array.isRequired,
}
