import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import ModeContext from '../../context/ModeContext'

import {
  SidbarMain,
  SidbarList,
  SidbarListItem,
  SidbarImgCard,
  SidbarImg,
  SidbarConcact,
  Sidbarpara,
} from './style'

import './index.css'

const SideBar = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <SidbarMain darkMode={darkMode}>
          <SidbarList>
            <li>
              <Link className="link-item" to="/">
                <SidbarListItem darkMode={darkMode}>
                  <AiFillHome className="side-item" size="20" /> Home
                </SidbarListItem>
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/trending">
                <SidbarListItem darkMode={darkMode}>
                  <HiFire className="side-item" size="20" /> Trending
                </SidbarListItem>
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/gaming">
                <SidbarListItem darkMode={darkMode}>
                  <SiYoutubegaming className="side-item" size="20" />
                  Gaming
                </SidbarListItem>
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/saved-videos">
                <SidbarListItem darkMode={darkMode}>
                  <MdPlaylistAdd className="side-item" size="25" />
                  Saved videos
                </SidbarListItem>
              </Link>
            </li>
          </SidbarList>
          <div>
            <SidbarConcact>CONTACT US</SidbarConcact>
            <SidbarImgCard>
              <SidbarImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SidbarImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SidbarImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SidbarImgCard>
            <Sidbarpara>
              Enjoy! Now to see your channels and recommendations!
            </Sidbarpara>
          </div>
        </SidbarMain>
      )
    }}
  </ModeContext.Consumer>
)

export default SideBar
