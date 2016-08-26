import React from 'react'
import {connect} from 'react-redux'

var AgeInput = React.createClass({
  render: function() {
    return ( <div>
      <label>18-25</label>
      <input type="text"
             defaultValue={ this.props.ageProfile.age} />
      <label>26-35</label>
      <input type="text"
             defaultValue={ this.props.ageProfile.age} />
      <label>36-45</label>
      <input type="text"
             defaultValue={ this.props.ageProfile.age} />
      <label>46-55</label>
      <input type="text"
             defaultValue={ this.props.ageProfile.age} />
      <label>56-65</label>
      <input type="text"
             defaultValue={ this.props.ageProfile.age} />
      <label>65+</label>
      <input type="text"
             defaultValue={ this.props.ageProfile.age} />
      </div>
    )
  }
})
