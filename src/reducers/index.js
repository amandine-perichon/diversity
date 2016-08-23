import {combineReducers} from 'redux'

import words from './words'
import images from './images'
import keyword from './keyword'

export default combineReducers({
  words,
  images,
  keyword
})
