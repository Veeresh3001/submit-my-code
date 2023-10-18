import styled from 'styled-components'

export const FailureCard = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background-color: ${props => (props.darkMode ? '#000000' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
`

export const FailureImg = styled.img`
  width: 200px;
`

export const Failurepara = styled.p`
  margin: 0px;
`

export const RetryBtn = styled.button`
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  border-radius: 6px;
  background-color: #4f46e5;
  color: #ffffff;
`
