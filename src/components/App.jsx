import React from 'react'

import AddWord from './AddWord'
import AddImage from './AddImage'
import WordsContainer from '../containers/WordsContainer'
import ImagesContainer from '../containers/ImagesContainer'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <WordsContainer />
        <AddWord />
        <ImagesContainer />
        <AddImage />
      </div>
    )
  }
})
