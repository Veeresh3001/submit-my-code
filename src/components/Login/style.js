import styled from 'styled-components'

export const LoginMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => (props.darkMode ? '#231f20' : '#f9f9f9')};
`

export const LoginCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  background-color: ${props => (props.darkMode ? '#000000' : '#f9f9f9')};
  box-shadow: ${props => !props.darkMode && '0px 0px 3px 1px #475569'};
  padding: 30px;
  border-radius: 10px;
`

export const LoginImage = styled.img`
  height: 60px;
  margin-bottom: 20px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const FormInput = styled.input`
  height: 35px;
  border: 1px solid #94a3b8;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  padding-left: 10px;
  color: ${props => (props.darkMode ? '#ffffff' : '#616e7c')};
  background-color: transparent;
`

export const FormLabel = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#616e7c')};
  margin-top: 15px;
`

export const CheckCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckInput = styled.input`
  margin-right: 5px;
`

export const CheckLabel = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#616e7c')};
`

export const ErrMsg = styled.p`
  color: ${props => (props.darkMode ? '#ff0000' : '#ff0b37')};
  margin: 0px;
`

export const LoginBtn = styled.button`
  height: 35px;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  color: #ffffff;
  background-color: #3b82f6;
`
