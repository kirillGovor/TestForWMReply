import React, { Component } from 'react';
import _ from 'lodash';
import './list.css';
import { Link } from 'react-router-dom';
import { IRootObject, API_KEY } from './interfaces';


class StickersForMain extends Component<IRootObject> {

    public state: IRootObject = {
        data: [],
        SavedImages: [],
    };


    componentDidMount() {
        return fetch(`http://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=8&offset=${this.state.data.length}`)
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
        if (this.state.data.length > 0) {



            const list = this.state.data.map((item, k) =>

                <div key={k} className="backgroundImages">
                    <img key={k} className="images" style={{ border: "solid 1px black", backgroundColor: "white" }}
                        height={item.images.fixed_height.height} width={item.images.fixed_height.width} src={item.images.fixed_height.url}

                        onClick={e => {  
                            let list = [item];  
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
                <div className="StyleList">
                    <Link to={'/stickers'}><h1>Stickers</h1></Link>
                    <div className="StyleList">
                        {list}

                    </div>
                    <Link to={'/stickers'}><p>see more</p></Link>
                </div>
            )
        }

        else {
            return (
                <div>Loading...</div>
            )
        }

    }




}

export default StickersForMain;
