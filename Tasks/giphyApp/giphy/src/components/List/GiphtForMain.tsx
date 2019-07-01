import React, { Component } from 'react';
import _ from 'lodash';
import InfiniteScroll from "react-infinite-scroll-component";
import './list.css';
import {Link} from 'react-router-dom';

const API_KEY: string = "HfShRO0x4JtJ5f34VTuoYNn23Qrc9nuH";

interface Fixed_height {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}
interface Images {
  fixed_height: Fixed_height;
  '480w_still': {
    url: string;
    width: string;
    height: string;
  };
}

interface RootObject {
  data: DataItem[],
  SavedImages: DataItem[],
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
    data: [],
    SavedImages: [],
  };


  componentDidMount() {

    return fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=8&offset=${this.state.data.length}`)
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
      
      <div key={k} className="backgroundImages">
        <img key={k} className="images" style={{ border: "solid 1px black", backgroundColor: "yellow" }}
          height={item.images.fixed_height.height} width={item.images.fixed_height.width} src={item.images.fixed_height.url}

          onClick={e => {
            let list = [item];
            console.log(list);
            var returnvalueJSON1: any = localStorage.getItem("Saved");
            if (returnvalueJSON1) {
              returnvalueJSON1 = JSON.parse(returnvalueJSON1);
              returnvalueJSON1 = returnvalueJSON1.concat(list)
            }
            else {
            }
            var valueJSON1 = JSON.stringify(returnvalueJSON1);
            localStorage.setItem("Saved", valueJSON1);
          }}
        ></img>
        </div>
       

      );
      return (
        <div className="StyleList">
         <Link to={'/trending'}> <h1>Giphy</h1></Link>  
          <div className="StyleList">
            {list}
            
            </div>
            <Link to={'/trending'}><p>see more</p></Link>  
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
