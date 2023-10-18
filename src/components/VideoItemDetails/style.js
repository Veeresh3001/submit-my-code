import styled from 'styled-components'

//

export const LikeBtn = styled.button`
  padding: 20px;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  color: ${props => (props.darkMode ? '#ebebeb' : '#181818')};
`

export const VideoDetailsMain = styled.div`
  padding: 20px;
  color: ${props => (props.darkMode ? '#ebebeb' : '#181818')};
`

export const VideoDetailsLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`

export const VideoDetailsCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const VideoDetailsLikesCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
