import styled from 'styled-components'

export const NotMain = styled.div`
  height: 100vh;
`

export const NotFoundMain = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 300px;
`

export const NotFoundCard = styled.li`
  display: flex;
  height: 90vh;
  overflow-y: scroll;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => (props.darkMode ? '#000000' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`
