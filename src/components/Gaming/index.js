import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'

import ModeContext from '../../context/ModeContext'

import Header from '../Header'
import SideBar from '../Sidebar'
import FailureView from '../FailureView'

import {
  TrendingCard,
  TrendingMain,
  TrendingTop,
  TrendingHead,
} from '../Trending/style'

import {LoadingCard, DisplayCard} from '../Home/style'

import {GamingCard, GamingImg, GamingList} from './style'

const apiStatusConst = {
  initial: 'initial',
  succuss: 'succuss',
  failure: 'failure',
  loading: 'loading',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  apiSuccuss = videos => {
    console.log(videos)
    const updatedData = videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
      title: each.title,
    }))
    // console.log(updatedData[0])
    this.setState({
      apiStatus: apiStatusConst.succuss,
      gamingVideosList: updatedData,
    })
  }

  apiFailure = () => {
    this.setState({apiStatus: apiStatusConst.failure})
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConst.loading})

    const jwt = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.apiSuccuss(data.videos)
    } else {
      this.apiFailure()
    }
  }

  clickRetryBtn = () => {
    this.getGamingVideosList()
    // console.log('Retry')
  }

  failureView = () => <FailureView retryBtn={this.clickRetryBtn} />

  loadingView = darkMode => (
    <LoadingCard className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={darkMode ? '#ffffff' : '#3b82f6'}
        height="50"
        width="50"
      />
    </LoadingCard>
  )

  trendingVideoItem = (item, darkMode) => (
    <Link className="link-item" to={`/videos/${item.id}`}>
      <GamingCard darkMode={darkMode}>
        <GamingImg src={item.thumbnailUrl} alt="video thumbnail" />
        <p>{item.title}</p>
        <p>{item.viewCount} Watching Worldwide</p>
      </GamingCard>
    </Link>
  )

  succussView = darkMode => {
    const {gamingVideosList} = this.state
    // console.log(trendingVideosList)
    return (
      <>
        <TrendingTop darkMode={darkMode}>
          <SiYoutubegaming size="50" color="red" />
          <TrendingHead>Gaming</TrendingHead>
        </TrendingTop>
        <GamingList>
          {gamingVideosList.map(each => (
            <li key={each.id}>
              {this.trendingVideoItem(each, darkMode)}
            </li>
          ))}
        </GamingList>
      </>
    )
  }

  switchRender = darkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.loading:
        return this.loadingView()
      case apiStatusConst.failure:
        return this.failureView()
      case apiStatusConst.succuss:
        return this.succussView(darkMode)
      default:
        return null
    }
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <div>
              <Header />
              <TrendingMain>
                <SideBar />
                <TrendingCard data-testid="gaming" darkMode={darkMode}>
                  <DisplayCard>{this.switchRender(darkMode)}</DisplayCard>
                </TrendingCard>
              </TrendingMain>
            </div>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Gaming
