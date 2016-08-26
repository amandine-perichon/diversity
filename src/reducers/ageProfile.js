const initialState = [
  {age: "18-25", population: 0},
  {age: "26-35", population: 0},
  {age: "36-45", population: 0},
  {age: "46-55", population: 0},
  {age: "56-65", population: 0},
  {age: "65+", population: 0}
]

const ageProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_AGE_PROFILE':
      const index = state.reduce((acc, elem, i) => {
        if (elem.age === action.age) {
          return i
        } else {
          return acc
        }
      }, -1)

      return [...state.slice(0, index), {age: action.age, population: action.population}, ...state.slice(index+1)]

    default:
      return state
  }
}

export default ageProfile
