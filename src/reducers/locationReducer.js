const locationReducer = (state = {}, action) => {
  // const { zipCode, radius } = action.location
  console.log(action.location)
  switch(action.type) {
  case 'SET_LOCATION':
    return { zipCode: action.location.zipCode, radius: action.location.radius }

  default:
    return state;
  }
}

export default locationReducer;