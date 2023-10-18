import styled from 'styled-components'

export const SidbarMain = styled.div`
  width: 20%;
  height: 90vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : '#383838')};
  display: flex;
  // align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 0px 20px 30px;
`

export const SidbarList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const SidbarListItem = styled.p`
  display: flex;
  align-items: center;
  width: 80%;
  color: ${props => (props.darkMode ? '#ffffff' : '#383838')};
`

export const SidbarImgCard = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
`

export const SidbarImg = styled.img`
  width: 30px;
  margin: 0px 10px 0px 10px;
`

export const SidbarConcact = styled.p`
  font-weight: 600;
`

export const Sidbarpara = styled.p`
  font-weight: 500;
  width: 70%;
`
