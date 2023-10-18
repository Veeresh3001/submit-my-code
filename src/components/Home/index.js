import {Component} from 'react'

import Cookies from 'js-cookie'

import {AiOutlineClose} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'

import Loader from 'react-loader-spinner'

import ModeContext from '../../context/ModeContext'

import Header from '../Header'
import SideBar from '../Sidebar'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'

import {
  HomeMain,
  HomeCard,
  HomeBanner,
  HomeBannerCard,
  BannerCloseBtn,
  SearchCard,
  SearchInput,
  SearchBtn,
  DisplayCard,
  VideosList,
  LoadingCard,
} from './style'

import {
  FailureCard,
  FailureImg,
  Failurepara,
  RetryBtn,
} from '../FailureView/style'

const apiStatusConst = {
  initial: 'initial',
  succuss: 'succuss',
  failure: 'failure',
  loading: 'loading',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  apiSuccuss = videos => {
    // console.log(videos)
    const updatedData = videos.map(each => ({
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
      title: each.title,
      channelName: each.channel.name,
      channelImage: each.channel.profile_image_url,
    }))
    // console.log(updatedData[0])
    this.setState({apiStatus: apiStatusConst.succuss, videosList: updatedData})
  }

  apiFailure = () => {
    this.setState({apiStatus: apiStatusConst.failure})
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConst.loading})

    const {searchInput} = this.state

    const jwt = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onClickBannerClose = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getVideosList()
  }

  clickRetryBtn = () => {
    this.getVideosList()
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

  succussView = darkMode => {
    const {videosList} = this.state
    // console.log(videosList)
    if (videosList.length === 0) {
      return (
        <FailureCard darkMode={darkMode}>
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1>No Search results found</h1>
          <Failurepara>
            Try different key words or remove search filter
          </Failurepara>
          <RetryBtn onClick={this.clickRetryBtn} type="button">
            Retry
          </RetryBtn>
        </FailureCard>
      )
    }
    return (
      <VideosList style={{paddingLeft: '20px'}}>
        {videosList.map(each => (
          <VideoItem item={each} key={each.id} />
        ))}
      </VideosList>
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
    const {showBanner, searchInput} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <div>
              <Header />
              <HomeMain>
                <SideBar />
                <HomeCard data-testid="home" darkMode={darkMode}>
                  {showBanner && (
                    <HomeBanner>
                      <HomeBannerCard>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerCloseBtn
                          type="button"
                          data-testid="close"
                          onClick={this.onClickBannerClose}
                        >
                          <AiOutlineClose size="20" />
                        </BannerCloseBtn>
                      </HomeBannerCard>
                      <p
                        style={{
                          color: '#181818',
                          fontWeight: '600',
                          fontSize: '20px',
                        }}
                      >
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </p>
                      <button
                        style={{
                          color: '#181818',
                          fontWeight: '500',
                          fontSize: '16px',
                          padding: '8px 18px',
                          backgroundColor: 'transparent',
                          borderRadius: '4px',
                          outline: 'none',
                          border: '1px solid #181818'
                        }}
                        type="button"
                      >
                        GET IT NOW
                      </button>
                    </HomeBanner>
                  )}
                  <SearchCard>
                    <SearchInput
                      type="search"
                      darkMode={darkMode}
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                      placeholder="Search"
                    />
                    <SearchBtn
                      onClick={this.onClickSearchBtn}
                      type="button"
                      data-testid="searchButton"
                    >
                      <BiSearchAlt2 color={darkMode ? 'white' : ''} size="20" />
                    </SearchBtn>
                  </SearchCard>
                  <DisplayCard>{this.switchRender(darkMode)}</DisplayCard>
                </HomeCard>
              </HomeMain>
            </div>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Home
