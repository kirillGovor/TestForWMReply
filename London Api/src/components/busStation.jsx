import React, { Component } from 'react';

import { connect } from "react-redux";
import { bussesFetchData } from "../actions/busses";
import GoogleApiWrapper from "../components/map"
import "../containers/App.css"
import bus from "../containers/bus.gif"
import { Input, Segment } from 'semantic-ui-react';
import MainMenu from "./menu"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latOnMap: 51.5085300, lonOnMap: -0.1257400, lat: 51.5085300, lon: -0.1257400, zoomOnMap: 11 };

  }

  componentDidMount() {
    this.props.fetchData(`https://api.tfl.gov.uk/line/${this.props.params.id}/stoppoints`);
  }

  componentWillReceiveProps(nextProps) {
    var Numberbusses = [];
    var posMapLat = [];
    var posMapLon = [];
    if (this.props !== nextProps) {
      for (var i = 0; i <= nextProps.busses.length - 1; i++) {
        Numberbusses.push(nextProps.busses[i].commonName);
        posMapLat.push(nextProps.busses[i].lat)
        posMapLon.push(nextProps.busses[i].lon)
      }
      this.setState({
        words: Numberbusses,
        busses: Numberbusses,
        latOnMap: posMapLat,
        lonOnMap: posMapLon
      });
    }
  }


  inputfilter(EO) {
    EO.preventDefault()
    this.setState({ contain: EO.target.elements.bus.value, words: this.state.busses }, this.filterWords)
  }

  filterWords() {
    let woords = this.state.busses.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
    woords = woords.filter(woords => woords.indexOf(this.state.contain) !== -1);
    this.setState({ words: woords });
  }
  mapCenter(latCenter, lonCenter) {
    this.setState({ lat: latCenter, lon: lonCenter, zoomOnMap: 17 })
  }




  render() {
    return (
      <div>
        <MainMenu></MainMenu>
        <form onSubmit={this.inputfilter.bind(this)}>
          <Segment basic textAlign='center'>
            <Input name="bus"
              action={{ color: 'blue', content: 'Search' }}
              icon='search'
              iconPosition='left'
              placeholder='Find bus...'

            /></Segment>
        </form>

        <div className="text">
          <h2>Number busses: ({this.props.busses.length}):</h2>
        </div>
        <ul className="listStations">
          {this.state.words === undefined ? <div><img alt="loading..." className="BusLoading" src={bus}></img></div> : this.state.words.map((station, index) => {
            return <li onClick={() => { this.mapCenter(this.state.latOnMap[index], this.state.lonOnMap[index]) }} key={index}>
              <div> {station}</div>
            </li>
          })}
        </ul>
        <GoogleApiWrapper stations={this.props.busses} centerLat={this.state.lat} centerLon={this.state.lon} zoomOnMap={this.state.zoomOnMap}></GoogleApiWrapper>
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    busses: state.busses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(bussesFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
