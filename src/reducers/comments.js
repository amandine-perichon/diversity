const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        id: Number(action.id),
        text: action.text
      }]

    default:
      return state
  }
}

export default comments
