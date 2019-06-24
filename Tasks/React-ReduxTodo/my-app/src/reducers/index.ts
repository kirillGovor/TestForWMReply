import { combineReducers } from 'redux';
import tasks from './tasks';
import visibilityFilter from './find'
import {routerReducer} from 'react-router-redux'
import cheked from'./cheked'
import maxValue from './maxValue'
export default  combineReducers({
  routing:routerReducer,
 tasks:tasks,
 visibilityFilter:visibilityFilter,
 cheked:cheked,
 maxValue:maxValue
})
