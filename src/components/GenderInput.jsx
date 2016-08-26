import React from 'react'
import {connect} from 'react-redux'

var SexualityInput = React.createClass({
  render: function() {
    return ( <div>
      <label>Heterosexual</label>
      <input type="text"
        defaultValue={ this.props.sexualityProfile.sexuality} />
      <label>Gay</label>
      <input type="text"
        defaultValue={ this.props.sexualityProfile.sexuality} />
      <label>Lesbian</label>
      <input type="text"
        defaultValue={ this.props.sexualityProfile.sexuality} />
      <label>Bisexual</label>
      <input type="text"
        defaultValue={ this.props.sexualityProfile.sexuality} />
      <label>Asexual</label>
      <input type="text"
        defaultValue={ this.props.sexualityProfile.sexuality} />
      <label>Pansexual</label>
      <input type="text"
        defaultValue={ this.props.sexualityProfile.sexuality} />
    </div>
  )
}
})

export default GenderInput
