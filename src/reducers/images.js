const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [...state, {
        id: action.id,
        url: action.url,
      }]

    default:
      return state
  }
}

export default images
