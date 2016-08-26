import React from 'react'
import {connect} from 'react-redux'
import {changeAgeProfile} from '../actions'

var AgeInput = React.createClass({
  changeAge (evt) {
    this.props.dispatch(changeAgeProfile(evt.target.name, evt.target.value))
  },
  render: function() {
    return (
      <div>
        <label>18-25</label>
        <input type="text" name="18-25" onChange={this.changeAge}/>
        <label>26-35</label>
        <input type="text" name="26-35" onChange={this.changeAge}/>
        <label>36-45</label>
        <input type="text" name="36-45" onChange={this.changeAge}/>
        <label>46-55</label>
        <input type="text" name="46-55" onChange={this.changeAge}/>
        <label>56-65</label>
        <input type="text" name="56-65" onChange={this.changeAge}/>
        <label>65+</label>
        <input type="text" name="65+" onChange={this.changeAge}/>
      </div>
    )
  }
})

export default connect() (AgeInput)
