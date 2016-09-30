import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';

const HashtagContainerHeader = () => {
    return (
        <div className="hashtag-container-header">
          <h2>Top 20 hashtags</h2>
          <div className="calendar-button">
            <FontAwesome name="calendar"/>
          </div>
          <span className="date">kk</span>
          <hr/>
        </div>
    );
};

HashtagContainerHeader.propTypes = {
};



export default HashtagContainerHeader;

//             <FontAwesome name="calendar"/>
