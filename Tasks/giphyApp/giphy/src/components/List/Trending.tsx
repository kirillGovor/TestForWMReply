import React, { Component } from 'react';
import _ from 'lodash'

const API_KEY: string = "HfShRO0x4JtJ5f34VTuoYNn23Qrc9nuH";
interface Images {

  original: Original;
  '480w_still': {
    url: string;
    width: string;
    height: string;
  };
}

interface Original {
  url: string;
  width: string;
  height: string;
  size: string;
  frames: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
  hash?: string;
}
interface RootObject {
  data: DataItem[];
}
interface DataItem {
  type: string;
  id: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  username: string;
  rating: string;
  title: string;
  images: Images
}





class Trending extends Component {

  public state: RootObject = {
    data: []
  };


  componentDidMount() {
    return fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`)
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

      const list = this.state.data.map((item, k) =>
        <img key={k} height="200px" src={item.images.original.url} ></img>
      );
      return (
        <div>
          <h1>Trending</h1>
          {list}
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
