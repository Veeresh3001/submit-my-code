import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ModeContext from '../../context/ModeContext'

import {
  LoginMain,
  LoginImage,
  LoginCard,
  LoginForm,
  FormInput,
  FormLabel,
  CheckCard,
  CheckInput,
  CheckLabel,
  ErrMsg,
  LoginBtn,
} from './style'

const loginDarkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const loginLightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Login extends Component {
  state = {
    loginFail: false,
    errMsg: '',
    username: '',
    password: '',
    checkBox: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  loginSuccuss = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFialure = errMsg => {
    this.setState({errMsg, loginFail: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.loginSuccuss(data.jwt_token)
    } else {
      this.loginFialure(data.error_msg)
    }
  }

  onChangeCheckBox = () => {
    this.setState(prev => ({checkBox: !prev.checkBox}))
  }

  render() {
    const {username, password, checkBox, errMsg, loginFail} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <LoginMain darkMode={darkMode}>
              <LoginCard darkMode={darkMode}>
                <LoginImage
                  src={darkMode ? loginDarkLogo : loginLightLogo}
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onSubmitForm}>
                  <FormLabel darkMode={darkMode} htmlFor="usernameId">
                    USERNAME
                  </FormLabel>
                  <FormInput
                    darkMode={darkMode}
                    onChange={this.onChangeUserName}
                    value={username}
                    placeholder="Username"
                    type="text"
                    id="usernameId"
                  />
                  <FormLabel darkMode={darkMode} htmlFor="passwordId">
                    PASSWORD
                  </FormLabel>
                  <FormInput
                    onChange={this.onChangePassword}
                    darkMode={darkMode}
                    value={password}
                    placeholder="Password"
                    type={checkBox ? 'text' : 'password'}
                    id="passwordId"
                  />
                  <CheckCard>
                    <CheckInput
                      checked={checkBox}
                      type="checkbox"
                      onChange={this.onChangeCheckBox}
                      id="checkBoxId"
                    />
                    <CheckLabel darkMode={darkMode} htmlFor="checkBoxId">
                      Show Password
                    </CheckLabel>
                  </CheckCard>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {loginFail && <ErrMsg>*{errMsg}</ErrMsg>}
                </LoginForm>
              </LoginCard>
            </LoginMain>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Login
