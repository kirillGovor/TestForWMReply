import React from 'react'
import { connect } from 'react-redux'
import { DeleteTask, changeSubtask,deleteCheked, deleteSubtask, chektask, checkSubtasks, allcheckSubtasksTrue, allcheckSubtasksFalse } from '../actions/index'
import{renderdate} from './renderDate'


let TodoComponent = {
  textDecoration: "none",//line-through
  cursor: "pointer"
}
let SubtaskComponent = {
  textDecoration: "none",//line-through
  cursor: "pointer"
}


const Filter = ({ dispatch, filteredList, ListTask }) => {

  let subtaskInput;
  if (filteredList.length > 0) {
    return (
      <div>
        {
          filteredList.map((item, i) => {
            if (ListTask.cheked[i] === true) {
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
            return (

              <ol key={i}>

                <li >
                  <span style={TodoComponent} onClick={e => { 
                    dispatch(chektask(item.id, !ListTask.cheked[i]));
                    item.subtask.map((item3, j) => {
                      if (ListTask.cheked[i] === true) {
                        dispatch(allcheckSubtasksTrue(item3, j, j));
                      }
                      else {
                        dispatch(allcheckSubtasksFalse(item3, j, j));
                      }
                    })
                  }} >{item.task} </span>

                  <ol>

                    {item.subtask.map((item2, k) => {

                      if (item.cheked[k] === true) {
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
                        <div key={k}>
                          <li style={SubtaskComponent} key={k}
                            onClick={e => {
                              e.preventDefault();
                              dispatch(checkSubtasks(item2, k, i));
                            }}> {item2}</li>


                          <button className="AddSub" onClick={e => {
                            e.preventDefault();
                            dispatch(deleteSubtask(item2, k, i, item.cheked));
                          }} >
                            Delete subtask</button>
                        </div>
                      )
                    })}

                  </ol>
                  {item.date ? (<span>{item.date} - {renderdate(item.date)}</span>) : (null)}
                </li >
                <input className="inputSubTask" type="text" ref={node => subtaskInput = node}></input>

                <button className="AddSub" onClick={e => {
                  e.preventDefault()
                  dispatch(DeleteTask(item.id));
                  dispatch(deleteCheked(i));
                }} type="button" >Delete</button>

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
   //находим подтаски и таски, тупо, но работает
  var storage = [];  
  var filteredTASK = [];
  var finalyFiltered = []
  for (var i = 0; i < state.tasks.length; i++) {
    if (state.tasks[i].subtask.length > 1 || state.tasks[i].subtask[0] !== "") {
      var filterSubtask = state.tasks[i].subtask.filter((task => task.includes(state.visibilityFilter)));
      if (filterSubtask.length > 0) {
        storage.push(state.tasks[i]);
      }
      else {
        filteredTASK[i] = state.tasks[i];
      }
    }
   
  }
  filteredTASK = filteredTASK.filter(track => track.task.includes(state.visibilityFilter));
  finalyFiltered = [...storage, ...filteredTASK];
 //находим подтаски и таски, тупо, но работает


  return {
    ListTask: state,
    filteredList: finalyFiltered,

  };
}



export default connect(mapStateToProps)(Filter);