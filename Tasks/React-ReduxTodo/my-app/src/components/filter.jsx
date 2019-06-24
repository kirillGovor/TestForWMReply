import React from 'react'
import { connect } from 'react-redux'
import { DeleteTask, changeSubtask, deleteSubtask, chektask, checkSubtasks, allcheckSubtasksTrue, allcheckSubtasksFalse } from '../actions/index'



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
            if (ListTask.cheked[i] == true) {
              TodoComponent = {
                textDecoration: "line-through",//line-through
                cursor: "pointer"
              }
              SubtaskComponent = {
                textDecoration: "line-through",//line-through
                cursor: "pointer"
              }
            }
            else {
              TodoComponent = {
                textDecoration: "none",//line-through
                cursor: "pointer"
              }
              SubtaskComponent = {
                textDecoration: "none",//line-through
                cursor: "pointer"
              }

            }
            return (

              <ol key={i}>

                <li >
                  <span style={TodoComponent} onClick={e => { //line-through
                    dispatch(chektask(item.id, !ListTask.cheked[i]));
                    item.subtask.map((item3, i) => {
                      if (ListTask.cheked[i] === true) {
                        dispatch(allcheckSubtasksTrue(item3, i, item.id));
                      }
                      else {
                        dispatch(allcheckSubtasksFalse(item3, i, item.id));
                      }
                    })
                  }} >{item.task} </span>

                  <ol>

                    {item.subtask.map((item2, i) => {

                      if (item.cheked[i] == true) {
                        SubtaskComponent = {
                          textDecoration: "line-through",//line-through
                          cursor: "pointer"
                        }
                      }
                      else {
                        SubtaskComponent = {
                          textDecoration: "none",//line-through
                          cursor: "pointer"
                        }
                      }




                      return (
                        <div key={i}>
                          <li style={SubtaskComponent} key={i}
                            onClick={e => {
                              e.preventDefault();
                              dispatch(checkSubtasks(item2, i, item.id));
                            }}> {item2}</li>


                          <button className="AddSub" onClick={e => {
                            e.preventDefault();
                            dispatch(deleteSubtask(item2, i, item.id, item.cheked));
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

function renderdate(date) {
  var one = new Date(date); // дата, до которой считаем.
  var two = Date.now(); // текущее время
  var remaining = one - two; // миллисекунды до даты
  remaining /= 1000; // секунды до даты
  remaining /= 60;    // минуты до даты
  remaining /= 60;    // часы до дат
  remaining /= 24;    // дни до даты

  let hours = (remaining - Number(remaining.toFixed(0))) * 24;
  let minutes = ((hours - Number(hours.toFixed(0))) * 60);

  if (remaining < 0 || hours < 0 || minutes < 0) {
    return ("истекло")
  }
  else {
    return (` "дней:"${remaining.toFixed(0)} "часов: "${hours.toFixed(0)} "минут: "${minutes.toFixed(0)}`);
  }
}
function mapStateToProps(state) {
  var storage = [];   //находим подтаски и таски, тупо, но работает
  var filteredTASK = [];
  var finaly = []
  for (var i = 0; i < state.tasks.length; i++) {
    if (state.tasks[i].subtask.length > 1 || state.tasks[i].subtask[0] !== "") {
      var filterSubtask = state.tasks[i].subtask.filter((task => task.includes(state.visibilityFilter)));
      if (filterSubtask.length > 0) {
        storage.push(state.tasks[i]);
      }
    }
    else {
      filteredTASK[i] = state.tasks[i];
    }
  }
  filteredTASK = filteredTASK.filter(track => track.task.includes(state.visibilityFilter));
  finaly = [...storage, ...filteredTASK];



  return {
    ListTask: state,
    filteredList: finaly,

  };
}



export default connect(mapStateToProps)(Filter);