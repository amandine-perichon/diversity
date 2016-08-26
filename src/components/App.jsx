import React from 'react'
import {connect} from 'react-redux'
import DiversityForm from './DiversityForm'
import PieChartView from './PieChartView.d3x'

const App =  React.createClass({
  render () {
    return (
      <div>
        <DiversityForm />
        <PieChartView data={this.props.data}/>
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    data: state.ageProfile
  }
}

export default connect(mapStateToProps)(App)
