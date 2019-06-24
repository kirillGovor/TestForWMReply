import React from 'react';
import { connect } from 'react-redux';
import { addTask, setVisibilityFilter, chekedMainTAsks, deleteFinished } from '../actions/index';
import List from './viewList';


const AddTasks = ({ dispatch, ListTask }) => {
  let inputName;
  let data;
  let subtask;
  let filter;

  console.log(ListTask)
  return (
    <div style={{ marginLeft: "25px" }} >
      <form className="container">
       <h1>TODO LIST</h1>
        <input className="seach" type="text" placeholder="search..." ref={node => filter = node} onInput={e => {
          e.preventDefault();
          dispatch(setVisibilityFilter(filter.value));
        }}>
        </input>
        <br></br>


        <input className="inputTodo" placeholder="task" ref={node => inputName = node} />
        <br></br>


        <input className="inputTodo" type="date" placeholder="date" ref={node => data = node} />
        <br></br>
        <input className="inputTodo" type="text" placeholder="subtask.." ref={node => subtask = node}></input>
        <br></br>
        <List></List>
        <button className="clearFinishedButton" type="button" onClick={e => {
          e.preventDefault();
          if (!inputName.value.trim()) {
            return
          }
          dispatch(addTask(inputName.value, data.value, subtask.value, ListTask.maxValue+1));
          inputName.value = '';
          data.value = '';
          subtask.value = '';
          dispatch(chekedMainTAsks(false));
        }}>add</button>
        <button className="clearFinishedButton" type="button" onClick={e => {
          e.preventDefault();
          dispatch(deleteFinished(ListTask.cheked));
        }}>delete finished</button>


      </form>


    </div>
  )
}

function mapStateToProps(state) {
  return {
    ListTask: state,
    filteredList: state.tasks.filter(track => track.task.includes(state.visibilityFilter)),
  };
}

export default connect(mapStateToProps)(AddTasks)
