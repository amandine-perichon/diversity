const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]

    case 'DELETE_WORD':
      const index = findWord(state, action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length)
      ]

    default:
      return state
  }
}

function findWord (arr, id) {
  return arr.findIndex(elem => {
    return elem.id === Number(id)
  })
}

export default words
