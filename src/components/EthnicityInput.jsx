import React from 'react'
import {connect} from 'react-redux'

var EthnicityInput = React.createClass({
  render: function() {
    return ( <div>
      <label>Pakeha</label>
      <input type="text"
        defaultValue={ this.props.ethnicityProfile.ethnicity} />
      <label>Maori</label>
      <input type="text"
        defaultValue={ this.props.ethnicityProfile.ethnicity} />
      <label>Pacific Islander</label>
      <input type="text"
        defaultValue={ this.props.ethnicityProfile.ethnicity} />
      <label>Asian</label>
      <input type="text"
        defaultValue={ this.props.ethnicityProfile.ethnicity} />
      <label>European</label>
      <input type="text"
        defaultValue={ this.props.ethnicityProfile.ethnicity} />
      <label>Other</label>
      <input type="text"
        defaultValue={ this.props.ethnicityProfile.ethnicity} />
    </div>
  )
}
})

export default EthnicityInput
