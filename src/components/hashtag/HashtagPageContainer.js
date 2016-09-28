import React, {PropTypes} from 'react';

// import components
import HashtagContainerContent from './HashtagContainerContent';
import HashtagContainerHeader from './HashtagContainerHeader';

const HashtagPageContainer = () => {
    return (
          <div className="o-container o-container--large contentOfSkew hashtag-page-container">
            <div className="o-grid o-grid--small-full o-grid--medium-full o-grid--large-fit o-grid--wrap">
              <div className="o-grid__cell o-grid__cell--width-70">
                <div className="o-grid o-grid--small-full o-grid--wrap">
                  <div className="o-grid__cell o-grid__cell--width-100" style={containerHeaderStyles}>
                    <HashtagContainerHeader/>
                  </div>
                  <div className="o-grid__cell o-grid__cell--width-100">
                    <HashtagContainerContent/>
                  </div>
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

const containerHeaderStyles = {'background':'#2c3e50','color':'white'};



export default HashtagPageContainer;
