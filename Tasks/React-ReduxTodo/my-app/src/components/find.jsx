import React from 'react';
import { connect } from 'react-redux';
import {  setVisibilityFilter} from '../actions/index';

const Find = ({ dispatch, ListTask }) => {
  let filter;

  console.log(ListTask)
  return (
    <div >
       <h1>TODO LIST</h1>
        <input className="seach" type="text" placeholder="search..." ref={node => filter = node} onInput={e => {
          e.preventDefault();
          dispatch(setVisibilityFilter(filter.value));
        }}>
        </input>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ListTask: state,
    filteredList: state.tasks.filter(track => track.task.includes(state.visibilityFilter)),
  };
}

export default connect(mapStateToProps)(Find)
