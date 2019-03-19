import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { bussesFetchData } from "../actions/busses";
import { Link } from 'react-router';
import bus from "./bus.gif";
import { Input, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import MainMenu from "../components/menu";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', contain: '', words: [] };

  }

  componentDidMount() {
    this.props.fetchData(`https://api.tfl.gov.uk/line/mode/bus/status`);
  
  }

  componentWillReceiveProps(nextProps) {
    var Numberbusses=[]
    if (this.props !== nextProps) {
     

      for (var i=0; i<=nextProps.busses.length-1;i++){
        Numberbusses.push(nextProps.busses[i].name);
      }
      this.setState({
        words: Numberbusses,
        busses: Numberbusses
      });
    }
  }


  inputfilter(EO) {
    EO.preventDefault()
    this.setState({ contain: EO.target.elements.bus.value,words:this.state.busses }, this.filterWords)
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
        <form  onSubmit={this.inputfilter.bind(this)}>
        <Segment  basic textAlign='center'>
          <Input name="bus" 
            action={{ color: 'blue', content: 'Search' }}
            icon='search'
            iconPosition='left'
            placeholder='Find bus...'
            
          /></Segment>
        </form>
        <div className="text">
        <h1>Welcome!</h1>
        <h2>please, select bus</h2>
        <h1>Number busses: ({this.state.words.length}):</h1>
        </div>
        <ul className="listBus">
          {this.props.busses.length === 0 ? <div><img alt="loading..." className="BusLoading" src={bus}></img></div> : this.state.words.map((person, index) => {
            return <li key={index}>
              <Link to={`/${person}`}> <div> {person}</div></Link>
            </li>
          })}
        </ul>
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
