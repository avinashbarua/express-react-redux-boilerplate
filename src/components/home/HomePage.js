import React from 'react';

// import the components
import SearchBox from './searchBox/SearchBox';
import HashBox from './hashScroll/HashBox';
import MapBox from './mapBox/MapBox';

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
        <div className="o-grid__cell">
          <MapBox/>
        </div>
      </div>
      <div className="o-grid">
        <div className="o-grid__cell">
          <HashBox/>
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
