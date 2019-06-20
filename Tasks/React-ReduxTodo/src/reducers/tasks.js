// TODO: Add Tasks related reducers here:
// We should be able to CRUD Task entities
// Every Task should include:
// 'task_id', 'task_title', 'task_description', 'deadline' and 'assignee' (some percon's name)

const initialState = {
  subtask:[]
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          date: action.date,
          subtask: [action.subtask],
        }
      ]

    case 'ADD_SUBTASK':
      return [
        ...state,
        {
          subtask: [action.subtask],
        }
      ]

    case 'GET_TASK':
      return state

      case 'CHANGE_SUBTASK':
          state[action.id]={
            id: action.id,
            task: state[action.id].task,
            date: state[action.id].date,
            subtask:state[action.id].subtask.concat(action.subtask),
          }
          return [
            
            ...state,
          
          ]


     
    case 'DELETE_TASK':
      return state.filter(task => task.id !== parseInt(action.id));
      

    default:
      return state;

  }
};

export default tasks;
