import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {commentImage} from '../actions'

const Image = ({url, comments, id, addComment}) => {
  return (
    <div>
      <img src={url} />
      <br/>
      <input type="text" name={id}
        onKeyUp={evt => {
          if (evt.keyCode === 13) {
            addComment(evt.target.value, evt.target.name)
            evt.target.value = ''
          }
        }} />
      <br/>
      {comments.map((elem, i) => <p key={i}>{elem.text}</p>)}
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment, id) => dispatch(commentImage(id, comment))
  }
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
}

export default connect(undefined, mapDispatchToProps)(Image)
