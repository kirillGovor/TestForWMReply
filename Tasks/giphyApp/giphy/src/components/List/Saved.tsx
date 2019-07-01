import React, { Component } from 'react';
import _ from 'lodash'
import './list.css'


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
  data: DataItem[];
  SavedImages: DataItem[];
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

class Stickers extends Component {
  public state: RootObject = {
    data: [],
    SavedImages: []
  };

  componentDidMount() {
    if (window.localStorage.getItem("Saved") && window.localStorage.getItem("Saved") != "{}") {
      var returnvalueJSON1: any = localStorage.getItem("Saved");
      if (returnvalueJSON1) {
        returnvalueJSON1 = JSON.parse(returnvalueJSON1);
        this.setState({ data: returnvalueJSON1 })
      }

    }
  }

  render() {


    if (this.state.data.length > 0) {

      const list = this.state.data.map((item, k) =>
      <div key={k}  className="backgroundDeleteImages">
        <img key={k} className="images"  style={{ border: "solid 1px black", backgroundColor: "yellow" }}
          height={item.images.fixed_height.height} width={item.images.fixed_height.width} src={item.images.fixed_height.url}

          onClick={e => {
            let onlineList = this.state.data;
            onlineList = onlineList.filter((task, index) => index !== k);
            let list = this.state.SavedImages;
            this.setState({ SavedImages: list });
            var returnvalueJSON1: string | null = localStorage.getItem("Saved");
            if (returnvalueJSON1) {
              let listforAdd: DataItem | ConcatArray<DataItem> = JSON.parse(returnvalueJSON1);
              list = list.concat(listforAdd);
              list = list.filter((task, index) => index !== k);
            }
            else {
            }
            var valueJSON1 = JSON.stringify(list);
            localStorage.setItem("Saved", valueJSON1);
            this.setState({ data: onlineList });
          }} ></img>
           </div>
      );
      return (
        <div>
          <h1>Saved</h1><br></br>
          <div className="StyleList">
            {list}
          </div>
        </div>
      )
    }

    else {
      return (
        <div>You dont have save images</div>
      )
    }
  }
}

export default Stickers;



