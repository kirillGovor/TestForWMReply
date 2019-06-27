import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'
import List from './components/List/List'
const API_KEY: string = "HfShRO0x4JtJ5f34VTuoYNn23Qrc9nuH";


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

class App extends Component {
  public state: RootObject = {
    data:[]
  
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
    if (!this.state.data) {
      return null
    } else {
      return (
        <div >
         

            <List data={this.state.data}/> 
         
          <h5>Powered by GIPHY</h5>
        </div>
      );
    }
  }
}

export default App;



