import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './search.css'
import { ISearch } from '../List/interfaces'

class Search extends Component<ISearch> {

  state = {
    inputvalue: ""
  }

  render() {

    let inputValue: HTMLInputElement | null;

    return (
      <div className='search'>
        <input className="InpuSearch" type="text" placeholder="Search..." ref={node => inputValue = node} onInput={e => {
          this.setState({ inputvalue: inputValue!.value })
        }} ></input>

        <Link to={{
          pathname: `/search/${this.state.inputvalue}`
        }}>
          <button className="buttonFind">Find</button>
        </Link>

      </div >
    )
  }






}

export default Search;
