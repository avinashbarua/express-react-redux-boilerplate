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
        <div className="o-grid o-grid--small-full o-grid--wrap map-box contentOfSkew">
          <div className="o-grid__cell o-grid__cell--width-30">
            <MapBoxSideBar/>
          </div>
          <div className="o-grid__cell o-grid__cell--width-70">
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
