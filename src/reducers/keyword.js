const keyword = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.keyWord

    default:
      return state
  }
}

export default keyword
