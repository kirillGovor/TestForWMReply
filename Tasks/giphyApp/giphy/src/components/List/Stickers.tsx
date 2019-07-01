import React, { Component } from 'react';
import _ from 'lodash';
import './list.css'
import { IRootObject, API_KEY } from './interfaces';
import StickersImages from './ImagesForStickers';


class Stickers extends Component {
  public state: IRootObject = {
    data: [],
    SavedImages: []
  };

  componentDidMount() {
    return fetch(`http://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=25&offset=0`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          alert("Error")
        } else {
          this.setState({
            data: json.data
          })
        }
      })

  }

  render() {


    if (this.state.data.length > 0) {
      return (
        <div className="StyleList">
          <h1>Stickers</h1>
          <StickersImages data={this.state.data} SavedImages={this.state.SavedImages}></StickersImages>
        </div>
      )
    }

    else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default Stickers;



