import {connect} from 'react-redux'

import Words from '../components/Words'
import {deleteWord} from '../actions'

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = dispatch => {
  return {
    destroy: wordId => dispatch(deleteWord(wordId))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Words)
