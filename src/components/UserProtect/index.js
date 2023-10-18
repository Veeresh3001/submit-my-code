import {Redirect, Route} from 'react-router-dom'

import Cookies from 'js-cookie'

const UserProtect = props => {
  const jwt = Cookies.get('jwt_token')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default UserProtect
