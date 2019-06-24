let nextTodoId = 0
export const addTask = (task:string,date:string,subtask?:string,maxValue?:number)=> ({
  type: 'ADD_TASK',
  payload: {
    id: maxValue||0,
    task,
    date,
    subtask:subtask||null,
    cheked:false
  }
 
})

export const maxValue = (value:number)=> ({
  type: 'MAX_VALUE',
  payload: {
    value:value,
  }

})


export const getTask = (task:string,date:string,subtask:string,id:number)=> ({
  type: 'GET_TASK',
  payload: {
  id: id,
  task:task,
  date:date,
  subtask:subtask,
  }
})
export  const chekedMainTAsks =(cheked:boolean)=>({
  type:'CHEKED_MAIN_TASKS',
  cheked:cheked
})
export const checkSubtasks =(subtask:string,id:number,idTask:number)=>({
  type:'CHEK_SUBTASK',
  payload:{
    subtask:subtask,
    id:id,
    idTask:idTask,
  }
})
export const allcheckSubtasksTrue =(subtask:string,id:number,idTask:number)=>({
  type:'ALL_CHEK_SUBTAKS_TRUE',
  payload:{
    subtask:subtask,
    id:id,
    idTask:idTask,
  }
})


export const allcheckSubtasksFalse =(subtask:string,id:number,idTask:number)=>({
  type:'ALL_CHEK_SUBTAKS_FALSE',
  payload:{
    subtask:subtask,
    id:id,
    idTask:idTask,
  }
})

export const chektask = (id:number,boo)=>({
  type:'CHANGE_MAIN_CHEKED',
  id:id,
  boo:boo
})
export const getTasks =()=>({
  type:'GET_TASKS',
  payload:{}
})

export const DeleteTask = (id:number)=> ({
      type: 'DELETE_TASK',
      id
  })
  export const deleteCheked = (id:number)=> ({
    type: 'DELETE_CHEKED',
    id
})
  
  export const deleteSubtask = (subtask:string,id:number,id2:number,cheked:[])=>({
    type:'DELETE_SUBTASK',
    subtask:subtask,
    id:id,
    idTask:id2,
    cheked:cheked
  })

  export const   deleteFinished = (chekeds:any)=>({
    type:'DELETE_FINISHED',
    payload:{
     mainTaskCheked:chekeds
    }
  })

  

export const addSubtask = (subtask:string)=>({
  type:'ADD_SUBTASK',
  subtask:subtask,
})

export const changeSubtask = (subtask:string,id:number,id2:number)=>({
  type:'CHANGE_SUBTASK',
  id:id,
  subtask,
  idTask:id,
  
})


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}