import React from 'react'
import styled from 'styled-components'
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
