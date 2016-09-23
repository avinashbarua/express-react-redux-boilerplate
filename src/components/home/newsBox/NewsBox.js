import React, {PropTypes} from 'react';
/*import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hashActions from '../../../actions/hashActions';*/

// import components

class NewsBox extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="o-grid o-grid--small-full o-grid--wrap news-box contentOfSkew" id="news-box">
          <div className="o-grid__cell o-grid__cell--width-100">
            <h1>News from the world</h1>
          </div>
          <div className="o-grid__cell o-grid__cell--width-80">
            Latest News
          </div>
          <div className="o-grid__cell o-grid__cell--width-20">
            Popular News
          </div>
        </div>
      </div>
    );
  }
}

NewsBox.propTypes = {
};



export default NewsBox;
