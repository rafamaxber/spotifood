import styled from 'styled-components'

export const WarpFilter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  padding: 10px 0;
  margin: 10px 0;
  .coutries {
    width: 15%;
    min-width: 170px;
  }
  .locale {
    width: 23%;
    min-width: 260px;
  }
  .timestamp {
    width: 15%;
    min-width: 100px;
  }
  .limit {
    width: 27%;
    min-width: 340px;
  }
  .offset {
    width: 10%;
    min-width: 120px;
  }
`

export const Label = styled.label`
  padding: 0 5px;
  display: block;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
  transition: transform ease 0.2s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.9);
  }
`

export const TitleFilter = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: block;
  width: 100%;
  color: #fff;
  margin-bottom: 1%;
`
