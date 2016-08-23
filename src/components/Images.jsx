import React, {PropTypes} from 'react'

import Image from './Image'

const Images = ({images}) => {
  return (
    <div>
      {images.map((image) => {
        console.log(image.id)
        return <Image url={image.url} key={image.id} />
      }
    )}
    </div>
  )
}

Images.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default Images
