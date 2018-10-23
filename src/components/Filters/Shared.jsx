import styled from 'styled-components'

export const WarpFilter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 2px solid #fff;
  padding: 10px 0;
  margin: 10px 0;
  @media (max-width: 935px) {
    padding-bottom: 50px;
  }
  .coutries {
    width: 15%;
    min-width: 170px;
    @media (max-width: 1065px) {
      margin-bottom: 20px;
    }
    @media (max-width: 710px) {
      width: 95%;
      max-width: 380px;
      margin: 0 auto 10px;
    }
  }
  .locale {
    width: 23%;
    min-width: 260px;
    @media (max-width: 710px) {
      width: 95%;
      max-width: 380px;
      margin: 0 auto 30px;
    }
  }
  .timestamp {
    width: 21%;
    min-width: 260px;
    @media (max-width: 710px) {
      width: 95%;
      max-width: 380px;
      margin: 0 auto 30px;
    }
  }
  .limit {
    width: 20%;
    min-width: 200px;
    @media (max-width: 935px) {
    }
    @media (max-width: 710px) {
      width: 95%;
      max-width: 380px;
      margin: 0 auto 30px;
    }
  }
  .offset {
    width: 10%;
    min-width: 120px;
    @media (max-width: 710px) {
      margin: 10px auto 0;
      width: 95%;
      max-width: 380px;
    }
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
