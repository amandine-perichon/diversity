import {connect} from 'react-redux'

import Images from '../components/Images'

const mapStateToProps = state => {
  return {
    images: state.images,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Images)
