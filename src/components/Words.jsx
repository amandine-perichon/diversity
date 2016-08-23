import React, {PropTypes} from 'react'

import Word from './Word'

const Words = ({words, keyWord, destroy}) => (
  <div>
    {words.filter(containKeyWord(keyWord)).map(word =>
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

function containKeyWord (keyWord) {
  return function (elem) {
    return elem.word.indexOf(keyWord) >= 0
  }
}

Words.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  keyWord: PropTypes.string.isRequired
}

export default Words
