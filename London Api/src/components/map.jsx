import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import _ from 'lodash';
import "../containers/App.css";
export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  render(


  ) {
    return (
      <div>


        <Map className="map"
          google={this.props.google}
          center={{
            lat: parseFloat(this.props.centerLat),
            lng: parseFloat(this.props.centerLon)
          }}
          zoom={this.props.zoomOnMap}
          onClick={this.onMapClicked}

        >
          {_.map(this.props.stations, (a, i) => {
            let lat = parseFloat(a.lat);
            let lon = parseFloat(a.lon);
            return (
              <Marker key={i}
                position={{ lat: lat, lng: lon }}
                defaultAnimation={2}
                name={a.commonName}
                onClick={this.onMarkerClick}
              />
            )
          })}



          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyDiXKYmH-DkCAZAgqYE9fJHXbDaQcUIf0o")
})(MapContainer)