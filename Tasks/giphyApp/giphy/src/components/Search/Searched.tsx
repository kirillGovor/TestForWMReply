import React, { Component } from 'react';
import _ from 'lodash'
import { RouteProps } from 'react-router';
import InfiniteScroll from "react-infinite-scroll-component";
import { IRootObject, API_KEY, IProps } from '../List/interfaces';


class Searched extends Component<IProps & RouteProps>  {

  public state: IRootObject = {
    data: [],
    find: '',
    SavedImages: []
  };

  constructor(props: IProps) {
    super(props)
  }
  componentDidMount() {
    let recievedMessage: string = this.props.location!.pathname.replace('/', '');
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
    let recivedMessage: string = this.props.location!.pathname.split('/')[1];
    recivedMessage = this.props.location!.pathname.replace('/', '');
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
      let recivedMessage: string = this.props.location!.pathname.split('/')[1];
      recivedMessage = this.props.location!.pathname.replace('/', '');
      return fetch(`http://api.giphy.com/v1/gifs/search?q=${recivedMessage}&api_key=${API_KEY}&limit=${this.state.data.length + 25}&offset=0`)
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

    }, 1500);
  };


  render() {
    if (this.state.data.length > 0) {

      const list = this.state.data.map((item, k) =>
        <div key={k} className="backgroundImages">
          <img key={k} className="images" style={{ border: "solid 1px black", backgroundColor: "yellow" }} height={item.images.fixed_height.height}
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
        </div>
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
