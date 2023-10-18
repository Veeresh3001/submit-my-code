import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import ReactPlayer from 'react-player/lazy'

import Loader from 'react-loader-spinner'

import ModeContext from '../../context/ModeContext'

import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'
import SideBar from '../Sidebar'
import FailureView from '../FailureView'

import {TrendingCard, TrendingMain} from '../Trending/style'

import {LoadingCard, DisplayCard} from '../Home/style'

import {ChannelImg, Channelpara} from '../VideoItem/style'

import {
  VideoDetailsMain,
  VideoDetailsLikes,
  VideoDetailsCard,
  LikeBtn,
  VideoDetailsLikesCard,
} from './style'

const apiStatusConst = {
  initial: 'initial',
  succuss: 'succuss',
  failure: 'failure',
  loading: 'loading',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConst.initial,
    like: false,
    disLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  apiSuccuss = each => {
    const updatedData = {
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
      title: each.title,
      videoUrl: each.video_url,
      description: each.description,
      publishedAt: each.published_at,
      channelName: each.channel.name,
      channelImage: each.channel.profile_image_url,
      subscriberCount: each.channel.subscriber_count,
    }
    // console.log(updatedData)
    this.setState({
      apiStatus: apiStatusConst.succuss,
      videoDetails: updatedData,
    })
  }

  apiFailure = () => {
    this.setState({apiStatus: apiStatusConst.failure})
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConst.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwt = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      // console.log(data)
      this.apiSuccuss(data.video_details)
    } else {
      this.apiFailure()
    }
  }

  clickRetryBtn = () => {
    this.getVideoDetails()
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

  onClickLikeBtn = () => {
    const {like, disLike} = this.state
    if (disLike === true && like === false) {
      this.setState({like: true, disLike: false})
    } else {
      this.setState(prev => ({like: !prev.like}))
    }
  }

  onClickDisLikeBtn = () => {
    const {like, disLike} = this.state
    if (disLike === false && like === true) {
      this.setState({like: false, disLike: true})
    } else {
      this.setState(prev => ({disLike: !prev.disLike}))
    }
  }

  succussView = darkMode => {
    const {videoDetails, like, disLike} = this.state
    // console.log(videoDetails)
    let date = formatDistanceToNow(new Date(videoDetails.publishedAt))
    // console.log(date.split(' '))
    date = date.split(' ')
    if (date.length === 3) {
      date.shift()
    }
    // console.log(date)
    date = date.join(' ')
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {updateSave, savedVideosList} = value

          const present = savedVideosList.find(
            each => each.id === videoDetails.id,
          )
          const saveIsActive = present !== undefined

          const onClickSaveBtn = () => {
            updateSave(videoDetails)
          }

          return (
            <VideoDetailsMain darkMode={darkMode}>
              <ReactPlayer width="100%" url={videoDetails.videoUrl} controls />
              <p>{videoDetails.title}</p>
              <VideoDetailsLikesCard>
                <VideoDetailsLikes>
                  <Channelpara>{videoDetails.viewCount} views</Channelpara>
                  <Channelpara>{date} ago</Channelpara>
                </VideoDetailsLikes>
                <VideoDetailsLikes>
                  <LikeBtn
                    onClick={this.onClickLikeBtn}
                    darkMode={darkMode}
                    type="button"
                    style={{color: `${like ? '#2563eb' : '#64748b'}`}}
                  >
                    <BiLike size="20" /> Like
                  </LikeBtn>
                  <LikeBtn
                    onClick={this.onClickDisLikeBtn}
                    darkMode={darkMode}
                    type="button"
                    style={{color: `${disLike ? '#2563eb' : '#64748b'}`}}
                  >
                    <BiDislike size="20" /> DisLike
                  </LikeBtn>
                  <LikeBtn
                    onClick={onClickSaveBtn}
                    darkMode={darkMode}
                    type="button"
                    style={{color: `${saveIsActive ? '#2563eb' : '#64748b'}`}}
                  >
                    <CgPlayListAdd size="20" />{' '}
                    {saveIsActive ? 'Saved' : 'Save'}
                  </LikeBtn>
                </VideoDetailsLikes>
              </VideoDetailsLikesCard>
              <hr />
              <VideoDetailsCard>
                <ChannelImg
                  src={videoDetails.channelImage}
                  alt="channel logo"
                />
                <div>
                  <h1>{videoDetails.channelName}</h1>
                  <Channelpara>
                    {videoDetails.subscriberCount} subscribers
                  </Channelpara>
                  <Channelpara>{videoDetails.description}</Channelpara>
                </div>
              </VideoDetailsCard>
            </VideoDetailsMain>
          )
        }}
      </SavedVideosContext.Consumer>
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
                <TrendingCard
                  data-testid="videoItemDetails"
                  darkMode={darkMode}
                >
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

export default VideoItemDetails
