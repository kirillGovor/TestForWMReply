let nextTodoId = 0
export const addTask = (task,date,subtask)=> ({
  type: 'ADD_TASK',
  id: nextTodoId++,
  task,
  date,
  subtask
})

export const getTask = (task,date,subtask)=> ({
  type: 'GET_TASK',
  id: nextTodoId++,
  task,
  date,
  subtask
})

export const DeleteTask = (id)=> ({
      type: 'DELETE_TASK',
      id
  })
export const addSubtask = (subtask)=>({
  type:'ADD_SUBTASK',
  subtask:subtask,
})
export const changeSubtask = (subtask,id)=>({
  type:'CHANGE_SUBTASK',
  id:id,
  subtask,
})