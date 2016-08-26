import request from 'superagent'

export const addAge = age => {
  return {
    type: 'ADD_AGE',
    age
  }
}
export const sendingAges= () => {
  return {
    type: 'SENDING_AGES'
  }
}
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
export const sendAges = ages => {
  return (dispatch) => {
    dispatch(sendingAges())

    request
      .post('http://localhost:3000/company')
      .send(ages)
      .end ((err, res) => {
        if (err) {
          return dispatch (sendingError(err.message))
        }
        dispatch (sendingSuccess())
      })
  }
}
