import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ModeContext from '../../context/ModeContext'

import {
  Video,
  Thubmnail,
  ChannelCard,
  ChannelImg,
  Channelpara,
  ViewCard,
} from './style'

const VideoItem = props => {
  const {item} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelImage,
    publishedAt,
    viewCount,
  } = item
  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        // console.log(publishedAt, new Date().getFullYear(), formatDistanceToNow(new Date(publishedAt)))
        let date = formatDistanceToNow(new Date(publishedAt))
        // console.log(date.split(' '))
        date = date.split(' ')
        if (date.length === 3) {
          date.shift()
        }
        // console.log(date)
        date = date.join(' ')
        return (
          <Video darkMode={darkMode}>
            <Link className="link-item" to={`/videos/${id}`}>
              <Thubmnail src={thumbnailUrl} alt="video thumbnail" />
              <ChannelCard darkMode={darkMode}>
                <ChannelImg src={channelImage} alt="channel logo" />
                <div>
                  <Channelpara style={{fontWeight: '500', fontSize: '15px'}}>
                    {title}
                  </Channelpara>
                  <Channelpara style={{fontWeight: '600', fontSize: '18px'}}>
                    {channelName}
                  </Channelpara>
                  <ViewCard>
                    <Channelpara>{viewCount} views</Channelpara>
                    <Channelpara>{date} ago</Channelpara>
                  </ViewCard>
                </div>
              </ChannelCard>
            </Link>
          </Video>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default VideoItem
