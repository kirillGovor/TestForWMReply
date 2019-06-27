import React from 'react';
import { connect } from 'react-redux';

const Imputs = ({ ListTask }) => {
  let inputName;
  let data;
  let subtask;
  

  console.log(ListTask)
  return (
    <div >
        <input className="inputTodo" placeholder="task" ref={node => inputName = node} />
        <br></br>
        <input className="inputTodo" type="date" placeholder="date" ref={node => data = node} />
        <br></br>
        <input className="inputTodo" type="text" placeholder="subtask.." ref={node => subtask = node}></input>
        <br></br>
  
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ListTask: state,
    filteredList: state.tasks.filter(track => track.task.includes(state.visibilityFilter)),
  };
}

export default connect(mapStateToProps)(Imputs)
