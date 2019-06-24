const maxValue = (state =0, action) => {
    switch (action.type) {
      case 'MAX_VALUE':
        return action.payload.value
      default:
        return state
    }
  }
  
  export default maxValue;


