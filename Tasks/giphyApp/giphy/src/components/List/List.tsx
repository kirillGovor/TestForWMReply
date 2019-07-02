import React, { Component } from 'react';
import _ from 'lodash'
import GiphtForMain from './GiphtForMain';
import StikersForMain from './StickersForMain'
import './list.css'
import { IRootObject } from './interfaces';
class List extends Component<IRootObject> {
  render() {
    return (
      <div>
      <div className='list'>
        <GiphtForMain data={[]} SavedImages={[]} />
        <StikersForMain data={[]} SavedImages={[]} />

        
      </div>
      <div className="footer">
      <h1>By giphy</h1>
      <p>Company 2019</p>
    </div>
    </div>
    )
  }
}
export default List;
