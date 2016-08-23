let nextWordId = 0
let nextImageId = 0

export const addWord = word => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImage = url => {
  return {
    type: 'ADD_IMAGE',
    id: nextImageId++,
    url
  }
}

export const deleteWord = wordId => {
  return {
    type: 'DELETE_WORD',
    id: wordId
  }
}

export const filter = keyWord => {
  return {
    type: 'SET_FILTER',
    keyWord
  }
}
