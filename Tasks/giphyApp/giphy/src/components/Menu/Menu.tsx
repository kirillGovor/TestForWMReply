import React, { Component } from 'react';
import './menu.css';
import _ from 'lodash'
import {Link} from 'react-router-dom'



class App extends Component {



    render() {

        return (
            <div className="Menu" >
                <h1>Powered by GIPHY</h1>
                <Link to={'/'}>Main</Link>
                <Link to={'/saved'}><h1>Saved</h1></Link> 
                <Link to={'/stickers'}>Stickers</Link>
                <Link to={'/trending'}>Trending</Link>
            </div>
        );
    }
}


export default App;



