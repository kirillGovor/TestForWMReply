import React, { Component } from 'react';
import _ from 'lodash'


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

}






class List extends Component<RootObject> {

  public state: RootObject = {
    data: this.props.data,
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data });

    }
  }
  componentDidMount() {

  }

  render() {





 

    if (this.state.data.length > 0) {

    const list=  this.state.data.map((item, k) => 
   <img key={k} src={item.bitly_url}></img> 
      );
      return(
      <div>{list}</div>
      )
    }

    else {
      return(
        <div>dfd</div>
      )
    }

  }



  
}

export default List;
