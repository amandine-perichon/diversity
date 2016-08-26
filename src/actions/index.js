import request from 'superagent'

export const changeAgeProfile = (age, population) => {
  return {
    type: 'CHANGE_AGE_PROFILE',
    age,
    population
  }
}

export const changeCompanyName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// export const sendingAges= () => {
//   return {
//     type: 'SENDING_AGES'
//   }
// }
export const sendingError= (message) => {
  return {
    type: 'SENDING_ERROR',
    message
  }
}
export const sendingSuccess =() => {
  return {
    type: 'SENDING_SUCCESS'
  }
}
//async
export const sendCompany = company => {
  return (dispatch) => {
    request
      .post('http://localhost:3000/company')
      .send(company)
      .end ((err, res) => {
        if (err) {
          return dispatch (sendingError(err.message))
        }
        dispatch (sendingSuccess())
      })
  }
}
