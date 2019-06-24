const cheked = (state: any = [], action) => {
  switch (action.type) {
    case 'CHEKED_MAIN_TASKS':
      return state.concat(action.cheked)

    case 'CHANGE_MAIN_CHEKED':
      state[action.id] = action.boo;
      return [

        ...state,
      ]

    case 'DELETE_FINISHED_TASK':
        state.map((item, i) => {
          state[i]    = {
            id: state[i].id,
            task: state[i].task,
            date: state[i].date,
            cheked:state[i].cheked.filter((task, index) => state[i].cheked[index] !== true),
            subtask: state[i].subtask.filter((task, index) => state[i].cheked[index] !== true),
          }
        })
      return [

        ...state,
      ]

      case 'DELETE_CHEKED':
          return    state.filter((item,index) => index == parseInt(action.id));
      
    default:
      return state
  }
}

export default cheked;



