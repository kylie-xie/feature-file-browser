import React, { Component } from 'react';
import TagCloud from './TagCloud';
import NavFeatureList from './NavFeatureList';
import { features, navChangeHandler } from '../types/Types';
import _ from 'lodash';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullFeatureList: props.features || [],
      filteredFeatureList: props.features || []
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      fullFeatureList: newProps.features || [],
      filteredFeatureList: newProps.features || []
    });
  }

  filterList(e) {
    var searchValue = e.target.value.toUpperCase();

    this.setState({
      filteredFeatureList: _.filter(this.state.fullFeatureList, (feature) => {
        return _.includes(feature.uri.toUpperCase(), searchValue);
      })
    })
  }

  render() {
    return (
      <div className="NavBar">
        <div className="NavBar_section">
          <input className="NavBar_filterInput" type="text" placeholder="Search" onChange={this.filterList.bind(this)} />
        </div>
        <div className="NavBar_section">
          <TagCloud features={this.state.fullFeatureList} />
        </div>
        <div className="NavBar_section">
          <NavFeatureList features={this.state.filteredFeatureList}
            selected={this.state.selected}
            navChangeHandler={this.props.navChangeHandler} />
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  features,
  navChangeHandler
};

export default NavBar;
