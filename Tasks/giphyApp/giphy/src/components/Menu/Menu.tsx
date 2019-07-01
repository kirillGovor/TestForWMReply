import React, { Component } from 'react';
import './menu.css';
import _ from 'lodash'
import {Link} from 'react-router-dom'



class App extends Component {

    render() {

        return (
            <div className="Menu" >
                <h1><a href="">by GIPHY</a></h1>
                <Link to={'/'}><h1>Main</h1></Link>
                <Link to={'/saved'}><h1>Saved</h1></Link> 
                <Link to={'/stickers'}><h1>Stickers</h1></Link>
                <Link to={'/trending'}><h1>Giphs</h1></Link>
            </div>
        );
    }
}


export default App;



