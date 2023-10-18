import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addToSavedList: () => {},
  removeFromSavedList: () => {},
  save: false,
  updateSave: () => {},
})

export default SavedVideosContext
