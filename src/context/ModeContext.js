import React from 'react'

const ModeContext = React.createContext({
  darkMode: false,
  toggleMode: () => {},
})

export default ModeContext
