import React, {PropTypes} from 'react'

const Image = ({url}) => <img src={url} />

Image.propTypes = {
  url: PropTypes.string.isRequired
}

export default Image
