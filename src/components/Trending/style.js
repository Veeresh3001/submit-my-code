import styled from 'styled-components'

export const TrendingCard = styled.div`
  height: 90vh;
  overflow-y: scroll;
  width: 80%;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`

export const TrendingTop = styled.div`
  display: flex;
  padding: 20px 0px 20px 45px;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#231f20' : '#e2e8f0')};
  height: 20vh;
`

export const TrendingHead = styled.h1`
  margin: 0px 0px 0px 45px;
`

export const TrendingMain = styled.div`
  display: flex;
`

export const TrendingVideo = styled.div`
  display: flex;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  width: 90%;
`

export const TrendingVideoImg = styled.img`
  width: 400px;
  margin-right: 30px;
`

export const TrendingVideoDetails = styled.div`
  margin: 20px;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
`
