
const initialState: any[] = [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
        if (action.payload.subtask==''){
          action.payload.subtask=null
        }
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          date: action.payload.date,
          subtask: [action.payload.subtask],
          cheked: [false]
        }
      ]
    // state.concat(action.payload)

    case 'GET_TASK':
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          date: action.payload.date,
          subtask: action.payload.subtask,
        }
      ]
    case 'GET_TASKS':
      return state;

    case 'CHANGE_SUBTASK':
      state[action.id] = {
        id: state[action.id].id,
        task: state[action.id].task,
        date: state[action.id].date,
        subtask: state[action.id].subtask.concat(action.subtask),
        cheked: state[action.id].cheked.concat(false)
      }
      return [

        ...state,

      ]
    case 'ALL_CHEK_SUBTAKS_TRUE':
      state[action.payload.idTask].cheked.map((item, i) => {state[action.payload.idTask].cheked[i]=true})
      return [

        ...state,

      ]

      case 'ALL_CHEK_SUBTAKS_FALSE':
      state[action.payload.id].cheked.map((item, i) => {state[action.payload.id].cheked[i]=false})
      return [

        ...state,

      ]

    case 'CHEK_SUBTASK':
      state[action.payload.id].cheked[action.payload.id] = (!state[action.payload.id].cheked[action.payload.id])
      return [

        ...state,

      ]

    case 'DELETE_FINISHED':
      state=state.filter((task,index)=> action.payload.mainTaskCheked[index]!==true); ///почему state не фильтруется???
      state.map((item, i) => {
        state[i] = {
          id: state[i].id,
          task: state[i].task,
          date: state[i].date,
          cheked: state[i].cheked.filter((task, index) => state[i].cheked[index] !== true),
          subtask: state[i].subtask.filter((task, index) => state[i].cheked[index] !== true),
        }
      }) 

      return [
        ...state,
      ]



    case 'DELETE_TASK':
    return state.filter(task => task.id !== parseInt(action.id));

    case 'DELETE_SUBTASK':
      state[action.id] = {
        id: state[action.id].id,
        task: state[action.id].task,
        date: state[action.id].date,
        cheked:state[action.id].cheked.filter((task, index) => index !== parseInt(action.id)),
        subtask: state[action.id].subtask.filter((task, index) => index !== parseInt(action.id)),
      }
      return [
        ...state,
      ]

    default:
      return state;

  }
};

export default tasks;
