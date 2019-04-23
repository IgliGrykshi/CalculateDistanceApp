import React, { Component } from 'react';
import Header from '../components/Header';
import geolib from "geolib";
import { Redirect } from "react-router-dom";

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = { distance: '' };


  }

  componentDidMount(){
    document.title = "Results page";
    const url = this.props.location.search.split("=")
    const data = JSON.parse(decodeURIComponent(url[1]))

    if(!this.props.location.state){
      this.props.history.push("/");
    }
    else this.setState(data, () => this.calculateResults(this.state.firstAddressCoords, this.state.secondAddressCoords));
  }

  calculateResults = (coord1, coord2) => {
    this.setState({ distance : geolib.getDistanceSimple(
      {latitude: coord1.lat, longitude: coord1.lng},
      {latitude: coord2.lat, longitude: coord2.lng}
    ) })
  }

  render() {
    if(!this.props.location.state){
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
    else return (
      <div>
        <Header title={"Results"} />
        <div className="container mt20">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Departure: {this.state.firstAddressValue}</li>
              <li className="list-group-item">Destination: {this.state.secondAddressValue}</li>
              <li className="list-group-item">Total distance(Km): {this.state.distance/1000} Km</li>
              <li className="list-group-item">Departure date: {this.state.date}</li>
              <li className="list-group-item">Number of passengers: {this.state.numberOfPassengers}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
