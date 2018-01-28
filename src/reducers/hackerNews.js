const hackerNews = (state = [], action) => {
    switch (action.type) {
      case 'TOP_STORIES':
        return [
          ...state
        ]
      default:
        return state
    }
  }
  
  export default hackerNews