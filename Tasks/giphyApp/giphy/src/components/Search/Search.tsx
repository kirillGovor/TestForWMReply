import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Search extends Component {

  state = {
    inputvalue: ""
  }


  render() {

    let inputValue: HTMLInputElement | null;
   
    return (
      <div>
        <input type="text" placeholder="Search..." ref={node => inputValue = node} onInput={e => {
          
          this.setState({ inputvalue: inputValue!.value })
         

        }} ></input>

        <Link to={{
          pathname: `/search/${this.state.inputvalue}`
        }}>
          <button>Find</button>
        </Link>

      </div >
    )
  }






}

export default Search;
