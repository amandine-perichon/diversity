import React, {PropTypes} from 'react'

const Age = ({age}) => (
  <div>{age}</div>
)

Age.propTypes = {
  age: PropTypes.integer.isRequired
}

export default Age
