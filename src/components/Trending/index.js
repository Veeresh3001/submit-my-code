import {Component} from 'react'

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import ModeContext from '../../context/ModeContext'

import Header from '../Header'
import SideBar from '../Sidebar'
import FailureView from '../FailureView'

import {
  TrendingCard,
  TrendingMain,
  TrendingVideo,
  TrendingVideoDetails,
  TrendingVideoImg,
  TrendingTop,
  TrendingHead,
} from './style'

import {LoadingCard, VideosList, DisplayCard} from '../Home/style'

import {Channelpara, ViewCard} from '../VideoItem/style'

const apiStatusConst = {
  initial: 'initial',
  succuss: 'succuss',
  failure: 'failure',
  loading: 'loading',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  apiSuccuss = videos => {
    console.log(videos)
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
    this.setState({
      apiStatus: apiStatusConst.succuss,
      trendingVideosList: updatedData,
    })
  }

  apiFailure = () => {
    this.setState({apiStatus: apiStatusConst.failure})
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConst.loading})

    const jwt = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
    this.getTrendingVideosList()
    // console.log('Retry')
  }

  failureView = () => <FailureView retryBtn={this.clickRetryBtn} />

  loadingView = darkMode => (
    <LoadingCard className='loader-container' data-testid='loader'>
      <Loader
        type='ThreeDots'
        color={darkMode ? '#ffffff' : '#3b82f6'}
        height='50'
        width='50'
      />
    </LoadingCard>
  )

  trendingVideoItem = (item, darkMode) => {
    let date = formatDistanceToNow(new Date(item.publishedAt))
    // console.log(date.split(' '))
    date = date.split(' ')
    if (date.length === 3) {
      date.shift()
    }
    // console.log(date)
    date = date.join(' ')
    return (
      <Link className='link-item' to={`/videos/${item.id}`}>
        <TrendingVideo darkMode={darkMode}>
          <TrendingVideoImg src={item.thumbnailUrl} alt='video thumbnail' />
          <div>
            <h1 style={{fontWeight: '600', fontSize: '20px'}}>{item.title}</h1>
            <p style={{fontWeight: '500', fontSize: '16px'}}>
              {item.channelName}
            </p>
            <ViewCard>
              <Channelpara>{item.viewCount} views</Channelpara>
              <Channelpara>{date} ago</Channelpara>
            </ViewCard>
          </div>
        </TrendingVideo>
      </Link>
    )
  }

  succussView = darkMode => {
    const {trendingVideosList} = this.state
    // console.log(trendingVideosList)
    return (
      <>
        <TrendingTop darkMode={darkMode}>
          <HiFire size='50' color='red' />
          <TrendingHead>Trending</TrendingHead>
        </TrendingTop>
        <VideosList>
          {trendingVideosList.map(each => (
            <TrendingVideoDetails darkMode={darkMode} key={each.id}>
              {this.trendingVideoItem(each, darkMode)}
            </TrendingVideoDetails>
          ))}
        </VideosList>
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
                <TrendingCard data-testid='trending' darkMode={darkMode}>
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

export default Trending
