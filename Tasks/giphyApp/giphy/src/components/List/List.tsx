import React, { Component } from 'react';
import _ from 'lodash'
import Trending from './Trending'
import Stickers from './Stickers'


class List extends Component {
  render() {
      return(
        <div>
          <Trending/>
          <Stickers/>
        </div>
      )
    } 
}
export default List;
