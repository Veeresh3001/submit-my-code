import styled from 'styled-components'

export const GamingCard = styled.div`
  // margin: 20px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`

export const GamingImg = styled.img`
  width: 200px;
  height: 280px;
`

export const GamingList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
