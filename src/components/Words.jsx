import React, {PropTypes} from 'react'

import Word from './Word'

const Words = ({words, destroy}) => (
  <div>
    {words.map(word =>
      <div key={word.id}>
        <Word
          {...word}
          />
        <button name={word.id} onClick={evt => {
            destroy(evt.target.name)
          }}>
          X
        </button>
      </div>

    )}
  </div>
)

Words.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Words
