import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  margin: auto;
`
export const Limit = styled.div`
  max-width: var(--site-size);
  margin: auto;
  padding: 0 2.5%;
`
export const FlexMain = styled(Main)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
