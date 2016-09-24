import React, {PropTypes} from 'react';

const HashtagPageContainer = () => {
    return (
          <div className="o-container o-container--large contentOfSkew hashtag-page-container">
            <div className="o-grid o-grid--small-full o-grid--medium-full o-grid--large-fit o-grid--wrap">
              <div className="o-grid__cell o-grid__cell--width-70">
                <div className="o-grid o-grid--small-full o-grid--wrap">
                  <div className="o-grid__cell o-grid__cell--width-100">Head</div>
                  <div className="o-grid__cell o-grid__cell--width-100">Content</div>
                </div>
              </div>
              <div className="o-grid__cell o-grid__cell--width-30">
              second
              </div>
            </div>
          </div>
    );
};

HashtagPageContainer.propTypes = {
};



export default HashtagPageContainer;
