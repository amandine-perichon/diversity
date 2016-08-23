import React, {PropTypes} from 'react'

import Image from './Image'

const Images = ({images, comments}) => {
  return (
    <div>
      {images.map((image) => {
        return <Image
          comments={comments.filter(comment => comment.id === image.id)}
          url={image.url}
          id={image.id}
          key={image.id} />
      }
    )}
    </div>
  )
}

Images.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired
}

export default Images
