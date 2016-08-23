import {combineReducers} from 'redux'

import words from './words'
import images from './images'
import keyword from './keyword'
import comments from './comments'

export default combineReducers({
  words,
  images,
  keyword,
  comments
})
