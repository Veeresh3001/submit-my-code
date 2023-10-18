import styled from 'styled-components'

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

export const SearchCard = styled.div`
  display: flex;
  justify-contnet: space-between;
  align-items: center;
  border-radius: 4px;
  border: 2px solid #475569;
  margin: 20px;
  height: 40px;
  width: 35%;
`

export const LoadingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`

export const DisplayCard = styled.div`
  padding: 0px 20px 20px 0px;
`

export const SearchInput = styled.input`
  outline: none;
  background-color: transparent;
  padding: 10px;
  font-size: 15px;
  width: 90%;
  border: none;
  height: 30px;
  font-size: 18px;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
`

export const SearchBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
`

export const HomeMain = styled.div`
  display: flex;
`

export const BannerCloseBtn = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const HomeBannerCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  // display: flex;
  // justify-content: space-between;
  width: 100%;
  background-size: cover;
  padding: 30px;
`

export const HomeCard = styled.div`
  height: 90vh;
  overflow-y: scroll;
  width: 80%;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  // color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`
