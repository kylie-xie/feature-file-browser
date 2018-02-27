import React, { Component } from 'react';
import { features } from '../types/Types';
import _ from 'lodash';

class TagCloud extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: this.getTags(props.features) || []
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      tags: this.getTags(newProps.features)
    });
  }

  getTags(features) {
    return _(features)
    .flatMap(feature => feature.elements)
    .flatMap(element => element.tags)
    .map(tag => tag && tag.name)
    .compact()
    .countBy()
    .value();
  }

  render() {
    return (
      <div className="TagCloud">
        {
          _.map(this.state.tags, function(count, tagName) {
            return <span className="TagCloud_tag">{tagName}: {count}</span>
          })
        }
      </div>
    );
  }
}

TagCloud.propTypes = {
  features
};

export default TagCloud;
