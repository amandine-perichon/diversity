import {connect} from 'react-redux'

import Images from '../components/Images'

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(Images)
