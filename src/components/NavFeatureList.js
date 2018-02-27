import React, { Component } from 'react';
import _ from 'lodash';
import { features, navChangeHandler } from '../types/Types';

class NavFeatureList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      featureNames: props.features || [],
      selected: null
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      featureNames: _.map(newProps.features, function(feature) {
        return {
          featureId: feature.id,
          uri: feature.uri,
          featureName: feature.uri.match(/[\w-]+\.feature/g)[0]
        };
      })
    })
  }

  render() {
    const navChangeHandler = this.props.navChangeHandler;

    return (
      <div className="NavFeatureList">
        {
          _.map(this.state.featureNames, (feature) => {
            return <div>
              <button data-id={feature.featureId} onClick={navChangeHandler}>
                {feature.featureName}
              </button>
            </div>
          })
        }
      </div>
    );
  }
}

NavFeatureList.propTypes = {
  features,
  navChangeHandler
};

export default NavFeatureList;
