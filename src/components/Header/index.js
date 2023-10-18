import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

import ModeContext from '../../context/ModeContext'

import {
  HeaderMain,
  HeaderCard,
  HeaderImage,
  HeaderProfile,
  LogoutBtn,
  ThemeBtn,
  PopupMain,
  PopupCard,
  ConfirmBtn,
  CancelBtn,
} from './style'

const darkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const lightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = props => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode, toggleMode} = value

      const onClickLogout = () => {
        // console.log('log Out')
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderMain darkMode={darkMode}>
          <Link to="/">
            <HeaderImage
              src={darkMode ? darkLogo : lightLogo}
              alt="website logo"
            />
          </Link>
          <HeaderCard>
            <ThemeBtn
              type="button"
              data-testid="theme"
              onClick={() => toggleMode()}
            >
              {darkMode ? (
                <FiSun size="20" color="white" />
              ) : (
                <FaMoon size="20" />
              )}
            </ThemeBtn>
            <HeaderProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutBtn darkMode={darkMode} type="button">
                  Logout
                </LogoutBtn>
              }
              className="popup-content"
            >
              {close => (
                <>
                  <PopupMain darkMode={darkMode}>
                    <p>Are you sure, you want to logout?</p>
                    <PopupCard>
                      <CancelBtn
                        darkMode={darkMode}
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn
                        type="button"
                        className="trigger-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </ConfirmBtn>
                    </PopupCard>
                  </PopupMain>
                </>
              )}
            </Popup>
          </HeaderCard>
        </HeaderMain>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Header)
