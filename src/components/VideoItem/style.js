import styled from 'styled-components'

export const Video = styled.li`
  width: 300px;
  margin: 10px 0px;
  box-shadow: 0px 0px 1px 1px ${props => props.darkMode ? '#475569' : '#cbd5e1'};
  padding: 6px;
`

export const Thubmnail = styled.img`
  width: 100%;
`

export const Channelpara = styled.p`
  margin: 5px 0px 0px 0px;
  width: 100%;
`

export const ViewCard = styled.div`
  display: flex;
  // width: 80%;
  align-items: center;
  // justify-content: space-between;
`

export const ChannelCard = styled.div`
  display: flex;
  text-decoration: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
`

export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-right: 20px;
`
