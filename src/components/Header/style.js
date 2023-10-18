import styled from 'styled-components'

export const PopupMain = styled.div`
  padding: 20px 30px 20px 30px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  border-radius: 10px;
  margin: auto;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${props => !props.darkMode && '0px 0px 6px 1px #7e858e'};
  align-items: center;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#00306e')};
`

export const PopupCard = styled.div`
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  align-items: center;
`

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 30px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  width: 100%;
  height: 10vh;
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  // height: 50px;
`

export const HeaderImage = styled.img`
  height: 40px;
  margin: 0px;
`

export const HeaderProfile = styled.img`
  width: 30px;
  margin: 0px 10px 0px 10px;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 20px;
  margin-top: 5px;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.darkMode ? '#ffffff' : '#4f46e5')};
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => (props.darkMode ? '#ffffff' : '#4f46e5')};
  margin-left: 20px;
  border-radius: 3px;
  height: 30px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: Roboto;
  font-size: 16px;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: 20px;
  border-radius: 5px;
  height: 35px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: Roboto;
  font-size: 16px;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.darkMode ? '#ffffff' : '#4f46e5')};
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => (props.darkMode ? '#ffffff' : '#4f46e5')};
  margin-right: 20px;
  border-radius: 5px;
  height: 35px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: Roboto;
  font-size: 16px;
`
