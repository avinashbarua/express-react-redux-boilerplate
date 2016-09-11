import React from 'react';

// import the components
import SearchBox from './searchBox/SearchBox';
import HashScrollBox from './hashScroll/HashScrollBox';

class HomePage extends React.Component {
  render(){
    return (
    <div className="o-container--super">
      <div className="o-grid">
        <div className="o-grid__cell">
          <SearchBox/>
        </div>
      </div>
      <div className="o-grid">
        <div className="o-grid__cell">Map</div>
      </div>
      <div className="o-grid">
        <div className="o-grid__cell">
          <HashScrollBox/>
        </div>
      </div>
      <div className="o-grid">
        <div className="o-grid__cell"><h1>BANNER</h1></div>
      </div>
      <div className="o-grid">
        <div className="o-grid__cell o-grid__cell--width-80">Latest News</div>
        <div className="o-grid__cell">Most Popular</div>
      </div>
    </div>
    );
  }
}

export default HomePage;
