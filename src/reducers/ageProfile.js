const initialState = {
  "18-25": 0,
  "26-35": 0,
  "36-45": 0,
  "46-55": 0,
  "56-65": 0,
  "65+": 0
}

const ageProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_AGE_PROFILE':
      const ageUpdate = {}
      ageUpdate[action.age] = Number(action.population)
      return Object.assign({}, state, ageUpdate)

    default:
      return state
  }
}

export default ageProfile
