import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../actions'

let AddSearch = ({changeSearch}) => {
  return (
    <div>
      <label>Filter Words:  </label>
      <input type="text" onChange={evt => {
        changeSearch(evt.target.value)
      }} />
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    changeSearch: keyWord => {
      dispatch(filter(keyWord)
    ) }
  }
}

AddSearch = connect(undefined, mapDispatchToProps)(AddSearch)
export default AddSearch
