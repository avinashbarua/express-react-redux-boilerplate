import React from 'react';

// import components
import HashCard from './HashCard';

class HashScrollBox extends React.Component {
  render() {
    return (
      <div id="hashtag-box">
      <h1>into hashtags? yup, we got it!</h1>
      <div id="hash-scroll-box">
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
        <HashCard/>
      </div>
      </div>
    );
  }
}



export default HashScrollBox;
