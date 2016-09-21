import React, {PropTypes} from 'react';
/*import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hashActions from '../../../actions/hashActions';*/

// import components

import MapBoxSideBar from './MapBoxSideBar';
import MapBoxMap from './MapBoxMap';

class MapBox extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>I am the Map Box, put grids inside me.</h1>
        <div className="o-grid">
          <div className="o-grid__cell o-grid__cell--width-20">
            <MapBoxSideBar/>
          </div>
          <div className="o-grid__cell">
            <MapBoxMap/>
          </div>
        </div>
      </div>
    );
  }
}

MapBox.propTypes = {
};



export default MapBox;