import React, { Component } from 'react';

import { connect } from "react-redux";
import { bussesFetchData } from "../actions/busses";
import GoogleApiWrapper from "../components/map"
import "../containers/App.css"
import bus from "../containers/bus.gif"
import { Input, Segment } from 'semantic-ui-react';
import MainMenu from "./menu"
class App extends Component {

  componentDidMount() {
    this.props.fetchData(`https://api.tfl.gov.uk/line/${this.props.params.id}/stoppoints`);
  }

  componentWillReceiveProps(nextProps) {
    var Numberbusses = []
    if (this.props !== nextProps) {
      for (var i = 0; i <= nextProps.busses.length - 1; i++) {
        Numberbusses.push(nextProps.busses[i].commonName);
      }
      this.setState({
        words: Numberbusses,
        busses: Numberbusses
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
        <ul className="listBus">
          {this.state == null ? <div><img alt="loading..." className="BusLoading" src={bus}></img></div> : this.state.words.map((station, index) => {
            return <li key={index}>
              <div> {station}</div>
            </li>
          })}
        </ul>
        <GoogleApiWrapper stations={this.props.busses}></GoogleApiWrapper>
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
