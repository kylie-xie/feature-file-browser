import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Content from './components/Content';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleNavChange = this.handleNavChange.bind(this);

    this.state = {
      features: [],
      selected: []
    };
  }

  componentDidMount() {
    fetch('/feature')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return [];
    })
    .then(elements => this.setState({
      features: elements
    }))
  }

  handleNavChange(e) {
    var selectedFeatureId = e.target.getAttribute('data-id');

    this.setState({
      selected: selectedFeatureId,
      selectedFeatures: _.filter(this.state.features, function(feature) {
        return feature.id === selectedFeatureId;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar features={this.state.features} selected={this.state.selected}
          navChangeHandler={this.handleNavChange} />
        <Content features={this.state.selectedFeatures} />
      </div>
    );
  }
}

export default App;
