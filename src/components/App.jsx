import React from 'react'
import DiversityForm from './DiversityForm'
import PieChartView from './PieChartView.d3x'

export default React.createClass({
  data: [
    {
      age: "<5",
      population: 9
    },
    {
      age: "5-13",
      population: 12
    },
    {
      age: "14-17",
      population: 5
    },
    {
      age: "18-24",
      population: 8
    },
    {
      age: "25-44",
      population: 5
    },
    {
      age: "45-64",
      population: 5
    }
  ],
  render () {
    return (
      <div>
      <PieChartView data={this.data} />
      <DiversityForm />
      </div>
    )
  }
})
