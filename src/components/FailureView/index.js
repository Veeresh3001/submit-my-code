import ModeContext from '../../context/ModeContext'

import {FailureCard, FailureImg, Failurepara, RetryBtn} from './style'

const FailureView = props => {
  const {retryBtn} = props

  const onCkickRetry = () => {
    retryBtn()
  }
  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        const failureImg = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureCard darkMode={darkMode}>
            <FailureImg src={failureImg} alt="failure view" />
            <h1>Oops! Something Went Wrong</h1>
            <Failurepara>
              We are having some trouble to complete your request.
            </Failurepara>
            <Failurepara>Please try again.</Failurepara>
            <RetryBtn type="button" onClick={onCkickRetry}>
              Retry
            </RetryBtn>
          </FailureCard>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default FailureView
