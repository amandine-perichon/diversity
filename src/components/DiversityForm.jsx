import React from 'react'
import {connect} from 'react-redux'
import AgeInput from './AgeInput'
import {changeCompanyName} from '../actions'


var DiversityForm = React.createClass({
  changeName (evt) {
    this.props.dispatch(changeCompanyName(evt.target.value))
  },

  register () {
    this.props.dispatch({
      type: 'REGISTER'
    })
  },

  render () {
    return (
      <div>
        <label>Company Name</label>
        <input name="companyName" onChange={this.changeName}/>
        <br/>
        <label>Choose your age</label>
        <AgeInput />
        <button onClick= {this.register}> Submit</button>
      </div>
    )
  }
})

export default connect() (DiversityForm)
