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
          _.map(this.state.featureDetails, (feature) => {
            return <div className="Content_featureSection">
              <h2>{feature.name}</h2>
              <div>
                {feature.description.split('\n').map((line, index) => {
                  if (!_.isEmpty(line)) {
                    return <div key={index}>{line}</div>
                  } else {
                    return <div className="spacer" />
                  }
                  }
                )}
              </div>
              <br />
              {
                _.map(feature.elements, (element) => {
                  return <div className="Content_scenarioSection">
                    <span className="Content_scenarioTitle">{element.name}</span><br />
                    {
                      _.map(element.steps, (step) => {
                        return <div>
                            <span className="Content_keyword">{step.keyword}</span>
                            <span>{step.name}</span>
                          </div>;
                      })
                    }
                  </div>;
                })
              }
            </div>
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
