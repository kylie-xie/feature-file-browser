import React, { Component } from 'react';
import { features } from '../types/Types';
import _ from 'lodash';

class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      featureDetails: props.features || []
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      featureDetails: newProps.features || []
    });
  }

  render() {
    return (
      <div className="Content">
        {
          _.map(this.state.featureDetails, function(feature) {
            return <div>{feature.name}</div>
          })
        }
      </div>
    );
  }
}

Content.propTypes = {
  features
};

export default Content;
