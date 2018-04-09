const searchLocationReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_LOCATION':
    return { zipCode: action.location.zipCode, radius: action.location.radius }

  default:
    return state;
  }
}

export default searchLocationReducer;