import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/index'

const addTasks = ({ dispatch, tasks, ListTask }) => {
  let inputName;
  let data;
  let subtask;
  console.log(ListTask)
  return (
    <div style={{ marginLeft: "25px" }} >
      <form>
        <p>Введите название</p>
        <input ref={node => inputName = node} />

       
        <p>Введите дату</p>
        <input type="date" ref={node => data = node} />
        <input type="text" ref={node=>subtask=node}></input>


        <button type="button" onClick={e => {
        e.preventDefault()
        if (!inputName.value.trim()) {
         return
        }
        dispatch(addTask( inputName.value, data.value))
        inputName.value = '';
        data.value = '';
      }}>
          Добавить задачу
        </button>

        <ul>{this.props}</ul>
      </form>
      {this.state}

    </div>
  )
}

function mapStateToProps(state) {
  return {
    ListTask: state

  };
}

export default connect(mapStateToProps)(addTasks)
