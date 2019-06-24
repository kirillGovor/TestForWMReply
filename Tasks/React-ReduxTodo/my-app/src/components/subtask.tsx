import React from 'react'
import { connect } from 'react-redux'
import { DeleteTask, changeSubtask, deleteSubtask, chektask, checkSubtasks, allcheckSubtasksTrue } from '../actions/index'
import { func } from 'prop-types';

const Subtask = ({ dispatch, ListTask }) => {

    let subtaskInput;
    if (ListTask.tasks.length > 0) {
        return (
            <div>
                {
                    ListTask.tasks.map((item, i) => {
                        return (
                            <ol key={i}>
                              
                                   
                                        {item.subtask.map((item2, i) => {
                                            return (
                                                <div key={i}>
                                                    <li style={{ cursor: "pointer", textDecoration: "" }} key={i}
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            dispatch(checkSubtasks(item2, i, item.id))
                                                        }}> {item2}</li>


                                                    <button onClick={e => {
                                                        e.preventDefault();
                                                        dispatch(deleteSubtask(item2, i, item.id, item.cheked));
                                                    }} >
                                                        Delete subtask</button>
                                                </div>
                                            )
                                        })}

                                   
                                    <p>Дедлайн</p>
                                    {item.date}  {renderdate(item.date)}
                               


                                <button onClick={e => {
                                    e.preventDefault()
                                    dispatch(DeleteTask(item.id));
                                }} type="button" >Delete</button>

                                <button type="button" onClick={e => {
                                    e.preventDefault()
                                    dispatch(changeSubtask(subtaskInput.value, i, item.id));

                                }} >
                                    add subtask</button>

                                <input type="text" ref={node => subtaskInput = node}></input>
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
    var one: any = new Date(date); // дата, до которой считаем.
    var two = Date.now(); // текущее время
    var remaining = one - two; // миллисекунды до даты
    remaining /= 1000; // секунды до даты
    remaining /= 60;    // минуты до даты
    remaining /= 60;    // часы до дат
    remaining /= 24;    // дни до даты

    let hours: number = (remaining - Number(remaining.toFixed(0))) * 24;
    let minutes: number = ((hours - Number(hours.toFixed(0))) * 60);

    if (remaining < 0 || hours < 0 || minutes < 0) {
        return ("истекло")
    }
    else {
        return (` "дней:"${remaining.toFixed(0)} "часов: "${hours.toFixed(0)} "минут: "${minutes.toFixed(0)}`);
    }
}
function mapStateToProps(state) {
    return {
        ListTask: state,
        filteredList: state.tasks.filter(track => track.task.includes(state.visibilityFilter))

    };
}


//function mapDispatchToProps(dispatch) {
//  return {
//    dispatch,
//    deleteSubtask({ item,i }, dispatch)
//  }
//}

export default connect(mapStateToProps)(Subtask)//,mapDispatchToProps
// {renderdate(item.date)=="finished"?(<span style={{ cursor: "pointer",textDecoration:"line-through"}} >{item2}</div>):({item2})}