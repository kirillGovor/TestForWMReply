import React, { Component } from 'react';
import _ from 'lodash'
import GiphtForMain from './GiphtForMain';
import StikersForMain from './StickersForMain'
import './list.css'

class List extends Component {
  render() {
      return(
        <div className='list'>
          <GiphtForMain/>
          <StikersForMain/>
        </div>
      )
    } 
}
export default List;
