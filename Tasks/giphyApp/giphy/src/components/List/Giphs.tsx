import React, { Component } from 'react';
import _ from 'lodash';
import './list.css';
import Imagess from './ImagesForGiphs';
import { IRootObject, API_KEY } from './interfaces';


class Trending extends Component<IRootObject> {

  public state: IRootObject = {
    data: [],
    SavedImages: [],
  };


  componentDidMount() {
    return fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0`)
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
          <h1>Giphs</h1>
          <Imagess data={this.state.data} SavedImages={this.state.SavedImages}></Imagess>
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

export default Trending;
