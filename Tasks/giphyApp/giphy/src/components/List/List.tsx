import React, { Component } from 'react';
import _ from 'lodash'
import GiphtForMain from './GiphtForMain';
import StikersForMain from './StickersForMain'
import './list.css'
import { IRootObject } from './interfaces';
class List extends Component<IRootObject> {
  render() {
    return (
      <div className='list'>
        <GiphtForMain data={[]} SavedImages={[]} />
        <StikersForMain data={[]} SavedImages={[]} />
      </div>
    )
  }
}
export default List;
