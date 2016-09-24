import React from 'react';

// importcomponents
import HashtagHeader from './HashtagHeader';

class HashtagPage extends React.Component {
  render(){
    return (
      <div className="o-grid o-grid--small-full o-grid--wrap">
        <div className="o-grid__cell o-grid__cell--width-100 skewed-bg">
          <HashtagHeader/>
        </div>
        <div className="o-grid__cell o-grid__cell--width-100 skewed-bg skewed-mid">
          <h1>OK</h1>
        </div>
      </div>
    );
  }
}

export default HashtagPage;
