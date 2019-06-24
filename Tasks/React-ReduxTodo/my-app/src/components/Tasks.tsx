import React from 'react'
import { connect } from 'react-redux'
import { DeleteTask, changeSubtask,deleteCheked, deleteSubtask, chektask, checkSubtasks,maxValue, allcheckSubtasksTrue,allcheckSubtasksFalse } from '../actions/index'
import{renderdate} from './renderDate'

let TodoComponent = {
  textDecoration: "none",
  cursor: "pointer"
}
let SubtaskComponent = {
  textDecoration: "none",
  cursor: "pointer"
}
let List ={
  border:"solid 1px #6fa4e0",
  borderRadius: "5px"
}
let maxNumber = 0
const Tasks = ({ dispatch, ListTask }) => {
  let subtaskInput;
  if (ListTask.tasks.length > 0) {
    return (
      <div>
        {
          ListTask.tasks.map((item, i) => {
            if (ListTask.cheked[i] == true) {
              TodoComponent = {
                textDecoration: "line-through",
                cursor: "pointer"
              }
              SubtaskComponent = {
                textDecoration: "line-through",
                cursor: "pointer"
              }
            }
            else {
              TodoComponent = {
                textDecoration: "none",
                cursor: "pointer"
              }
              SubtaskComponent = {
                textDecoration: "none",
                cursor: "pointer"
              }

            }
            
               if (maxNumber<Number(item.id)) {
                maxNumber=item.id;
                dispatch(maxValue(maxNumber))
               }
            
            return (

              <ol key={i} style={List}>

                <li >
                  <span style={TodoComponent} onClick={e => { 
                    dispatch(chektask(i, !ListTask.cheked[i]));
                    item.subtask.map((item3, j) => {
                      if(ListTask.cheked[i]===true){
                      dispatch(allcheckSubtasksTrue(item3, j, j))
                    }
                    else{
                      dispatch(allcheckSubtasksFalse(item3, j, j))
                    }
                    })
                  }} >{item.task} </span>

                  <ol>

                    {item.subtask.map((item2, k) => {

                      if (item.cheked[i] == true) {
                        SubtaskComponent = {
                          textDecoration: "line-through",
                          cursor: "pointer"
                        }
                      }
                      else {
                        SubtaskComponent = {
                          textDecoration: "none",
                          cursor: "pointer"
                        }
                      }

                      return (
                        <div key={i}>
                          <li style={SubtaskComponent}  key={i}
                            onClick={e => {
                              e.preventDefault();
                              dispatch(checkSubtasks(item2, k, item.id))
                            }}> {item2}</li>


                          <button className="AddSub" onClick={e => {
                            e.preventDefault();
                            dispatch(deleteSubtask(item2, k, item.id, item.cheked));
                          }} >
                            delete subtask</button>
                        </div>
                      )
                    })}

                  </ol>
                  {item.date?( <span>{item.date} - {renderdate(item.date)}</span>):(null)}     
                </li >

                <input className="inputSubTask" type="text" ref={node => subtaskInput = node}></input>
                <button className="AddSub" onClick={e => {
                  e.preventDefault()
                  dispatch(DeleteTask(item.id));
                  dispatch(deleteCheked(i));
                }} type="button" >delete task</button>

                <button className="AddSub" type="button" onClick={e => {
                  e.preventDefault()
                  dispatch(changeSubtask(subtaskInput.value, i, item.id));
                }} >
                  add subtask</button>
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
    ListTask: state,
    filteredList: state.tasks.filter(track => track.task.includes(state.visibilityFilter))

  };
}



export default connect(mapStateToProps)(Tasks)