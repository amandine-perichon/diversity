import React from 'react'
import {connect} from 'react-redux'
import {addImage} from '../actions'

let AddImage = ({insertImage}) => (
  <input
    placeholder="Enter an image url here"
    onKeyUp={evt => {
      if (evt.keyCode === 13)
      {
        insertImage(evt.currentTarget.value)
        evt.currentTarget.value = ''
      }
    }
 }
  />
)

function mapDispatchToProps (dispatch) {
  return {
    insertImage: url => dispatch(addImage(url))
  }
}

AddImage = connect(undefined, mapDispatchToProps)(AddImage)

export default AddImage
