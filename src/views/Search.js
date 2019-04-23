import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { withRouter } from "react-router-dom";


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      firstAddressValue: '',
      secondAddressValue: '', 
      firstAddressCoords: '',
      secondAddressCoords: '', 
      date: new Date().toISOString().split("T")[0],
      numberOfPassengers: 1
    };
  }
  
  componentDidMount(){
    document.title = "Search page";
  }

  handleFirstAddress(data){
    this.setState({ firstAddressValue: data, secondAddressCoords: "" });
  }

  handleSecondAddress(data){
    this.setState({ secondAddressValue: data, secondAddressCoords: "" });
  }

  handleFirstAddressCoords(data){
    this.setState({ firstAddressCoords: data });
  }

  handleSecondAddressCoords(data){
    this.setState({ secondAddressCoords: data });
  }

  handleClick(){
    if(this.state.firstAddressCoords && this.state.secondAddressCoords){
      this.props.history.push({    
        pathname: '/Results',
        search: '?state=' + encodeURIComponent(JSON.stringify(this.state)),
        state: this.state 
        })
    }
  }

  render() {
    return (
      <div>
        <Header title={"Search"}/>
        <div className="container mt20">
          <SearchBar 
            addressValue = { (data) => this.handleFirstAddress(data) }
            addressCoords = { (data) => this.handleFirstAddressCoords(data) }
            address = {this.state.firstAddressValue}
            placeholder = "Enter departure place ..."
          />
          <SearchBar 
            addressValue = { (data) => this.handleSecondAddress(data) }
            addressCoords = { (data) => this.handleSecondAddressCoords(data) }
            address = {this.state.secondAddressValue}
            placeholder = "Enter destination place ..."
          />
          <input type="date" className="inputWidth" value={this.state.date} min={new Date().toISOString().split("T")[0]} onChange={(e) => this.setState({date: e.target.value}) }/><br />
          <input type="number" className="inputWidth" value={this.state.numberOfPassengers} min="1" onChange={(e) => this.setState({numberOfPassengers: e.target.value}) }/><br />
          <button type="button" className="btn btn-success inputWidth" onClick={() => this.handleClick()} >Calculate distance</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
