import React from 'react'
import { connect } from 'react-redux'
import { DeleteTask,changeSubtask } from '../actions/index'

const Tasks = ({ dispatch, ListTask }) => {
let subtaskInput;
  if (ListTask.tasks.length > 0) {
    return (
      <div>
        {
          ListTask.tasks.map(function (item, i) {
            return (

              <ol key={i}>
                <li >
                  {item.task}
               
                  <ol>
                  
                   
                    {item.subtask.map(function (item, i){
                      if(item)
                      return(<li key={i}>{item}</li>)
                    })}
                   
                  </ol>
                  <p>Дедлайн</p>
                  {item.date}
                </li >


                <button onClick={e => {
                  e.preventDefault()
                  dispatch(DeleteTask(item.id));
                }} type="button" >Delete</button>

                <button type="button" onClick={e => {
                  e.preventDefault()
                  dispatch(changeSubtask(subtaskInput.value,item.id));
                }} >
                  add subtask</button>
                  <input type="text" ref={node=>subtaskInput=node}></input>
              </ol>
            )
          })
        }

      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ListTask: state

  };
}

export default connect(mapStateToProps)(Tasks)
