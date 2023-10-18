import ModeContext from '../../context/ModeContext'

import Header from '../Header'
import SideBar from '../Sidebar'

import {NotFoundMain, NotFoundCard, NotFoundImg, NotMain} from './style'

const notDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const notLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const NotFound = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <NotMain>
          <Header />
          <NotFoundMain>
            <SideBar />
            <NotFoundCard darkMode={darkMode}>
              <NotFoundImg
                src={darkMode ? notDark : notLight}
                alt="not found"
              />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found</p>
            </NotFoundCard>
          </NotFoundMain>
        </NotMain>
      )
    }}
  </ModeContext.Consumer>
)

export default NotFound
