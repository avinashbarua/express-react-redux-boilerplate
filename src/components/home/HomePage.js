import React from 'react';

// import the components
import SearchBox from './searchBox/SearchBox';
import HashBox from './hashBox/HashBox';
import MapBox from './mapBox/MapBox';

class HomePage extends React.Component {
  render(){
    return (
      <div className="o-grid o-grid--small-full o-grid--wrap">
        <div className="o-grid__cell o-grid__cell--width-100 skewed-bg">
          <SearchBox/>
        </div>
        <div className="o-grid__cell o-grid__cell--width-100 skewed-bg red">
          <MapBox/>
        </div>
        <div className="o-grid__cell o-grid__cell--width-100 skewed-bg">
        </div>
      </div>
    );
  }
}

export default HomePage;


