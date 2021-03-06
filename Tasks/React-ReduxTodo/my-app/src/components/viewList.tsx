import React from 'react'
import { connect } from 'react-redux'
import Todo from './Tasks';
import FilterTask from './filter'
export const localStorage = ({ dispatch }) => {
 
}


const ViewList: any = (state) => {

  if (state.ListTask.visibilityFilter != "SHOW_ALL") {
    return (
      <FilterTask/>
    )
  }
  else {
    return (
      <Todo></Todo>
    )
  }

}


function mapStateToProps(state) {
  return {
    ListTask: state,
    filteredList: state.tasks.filter(task => task.task.includes(state.visibilityFilter))

  };

}



export default connect(mapStateToProps)(ViewList)//,mapDispatchToProps
