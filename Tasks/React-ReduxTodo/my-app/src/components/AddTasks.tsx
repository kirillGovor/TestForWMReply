import React from 'react';
import { connect } from 'react-redux';
import { addTask, setVisibilityFilter, chekedMainTAsks, deleteFinished } from '../actions/index';
import List from './viewList';
import Find from './find';
import Imputs from './imputs'
import MainButtons from './MainButtons'
const AddTasks = ({ dispatch, ListTask }) => {
  let inputName;
  let data;
  let subtask;


  console.log(ListTask)
  return (
    <div style={{ marginLeft: "25px" }} >
      <form className="container">
        <Find />
        <br></br>

      
        <Imputs></Imputs>
        <List></List>
        <MainButtons/>


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
