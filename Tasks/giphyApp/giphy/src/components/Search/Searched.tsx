import React, { Component, ReactNode } from 'react';
import _ from 'lodash'
import { RouteProps } from 'react-router';
import InfiniteScroll from "react-infinite-scroll-component";
const API_KEY: string = "HfShRO0x4JtJ5f34VTuoYNn23Qrc9nuH";

interface Images {
  fixed_height: Fixed_height;
  '480w_still': {
    url: string;
    width: string;
    height: string;
  };
}

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

interface RootObject {
  data: DataItem[];
  find: string;
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

interface pathname {
  pathname: string;

}
interface Props {
  props: PropsDataItem[];
}
interface PropsDataItem {

  location: pathname;
}




class Searched extends Component<Props & RouteProps>  {

  public state: RootObject = {
    data: [],
    find: '',
    SavedImages: []
  };

  constructor(props: Props) {
    super(props)
  }
  componentDidMount() {
    let recievedMessage: string = this.props.location!.pathname.replace('/', ''); //это что за тип будет?)
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${recievedMessage}&api_key=${API_KEY}&limit=24`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          alert("Error")
        } else {
          this.setState({
            data: json.data,
            find: recievedMessage
          })
        }
      })
  }


  componentDidUpdate() {
    let recivedMessage: string = this.props.location!.pathname.split('/')[1]; // $100
    recivedMessage = this.props.location!.pathname.replace('/', ''); //это что за тип будет?)
    if (this.state.find !== recivedMessage) {


      return fetch(`http://api.giphy.com/v1/gifs/search?q=${recivedMessage}&api_key=${API_KEY}&limit=24`)
        .then(res => res.json())
        .then(json => {
          if (json.error) {
            alert("Error")
          }
          else {
            this.setState({
              data: json.data,
              find: recivedMessage
            })
          }
        })
    }
  }


  fetchMoreData = () => {
    setTimeout(() => {
      return fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=${this.state.data.length}`)
        .then(res => res.json())
        .then(json => {
          if (json.error) {
            alert("Error")
          } else {
            json.data = json.data.concat(this.state.data)
            this.setState({
              data: json.data
            })
            console.log(json.data.length)
          }
        })

    }, 1500);
  };


  render() {
    if (this.state.data.length > 0) {

      const list = this.state.data.map((item, k) =>
        <img key={k} style={{ border: "solid 1px black", backgroundColor: "yellow" }} height={item.images.fixed_height.height}
          width={item.images.fixed_height.width} src={item.images.fixed_height.url}

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
      );
      return (
        <InfiniteScroll
          dataLength={this.state.data.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {list}
        </InfiniteScroll>
      )
    }

    else {
      return (
        <div>Loading...</div>
      )
    }
  }




}

export default Searched;
