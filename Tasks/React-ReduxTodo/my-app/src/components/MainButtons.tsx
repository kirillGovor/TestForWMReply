import React from 'react';
import { connect } from 'react-redux';
import { addTask, chekedMainTAsks, deleteFinished } from '../actions/index';

const MainButtons = ({ dispatch, ListTask }) => {
  let inputName;
  let data;
  let subtask;


  return (
    <div >
      <button className="clearFinishedButton" type="button" onClick={e => {
          e.preventDefault();
          if (!inputName.value.trim()) {
            return
          }
          dispatch(addTask(inputName.value, data.value, subtask.value, ListTask.maxValue + 1));
          inputName.value = '';
          data.value = '';
          subtask.value = '';
          dispatch(chekedMainTAsks(false));
        }}>add</button>
        <button className="clearFinishedButton" type="button" onClick={e => {
          e.preventDefault();
          dispatch(deleteFinished(ListTask.cheked));
        }}>delete finished</button>

  </div>
  )
}

function mapStateToProps(state) {
  return {
    ListTask: state,
    filteredList: state.tasks.filter(track => track.task.includes(state.visibilityFilter)),
  };
}

export default connect(mapStateToProps)(MainButtons)
